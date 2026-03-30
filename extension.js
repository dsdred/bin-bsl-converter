const vscode = require('vscode');
const fs = require('fs').promises;
const path = require('path');

function activate(context) {
    context.subscriptions.push(
        vscode.commands.registerCommand('bin-bsl.extractFromBin', async (uri) => {
            if (uri) {
                await extractBinFile(uri.fsPath);
            } else {
                const uris = await vscode.window.showOpenDialog({
                    canSelectMany: true,
                    filters: { 'BIN файлы': ['bin'] }
                });
                if (uris) {
                    for (const u of uris) {
                        await extractBinFile(u.fsPath);
                    }
                }
            }
        }),

        vscode.commands.registerCommand('bin-bsl.extractFromFolder', async (uri) => {
            const folderUri = uri || await vscode.window.showOpenDialog({
                canSelectFolders: true,
                canSelectMany: false
            });
            
            if (folderUri) {
                const folder = uri ? uri.fsPath : folderUri[0].fsPath;
                await extractFromFolder(folder);
            }
        })
    );
}

async function extractBinFile(binPath) {
    try {
        const moduleText = await extractModuleFromBin(binPath);
        
        const fileName = path.basename(binPath, '.bin');
        const dirName = path.dirname(binPath);
        const outputFolder = path.join(dirName, fileName);
        
        await fs.mkdir(outputFolder, { recursive: true });
        
        const bslPath = path.join(outputFolder, `${fileName}.bsl`);
        await fs.writeFile(bslPath, moduleText || '', 'utf8');
        
        vscode.window.showInformationMessage(`Извлечено: ${bslPath}`);
    } catch (err) {
        vscode.window.showErrorMessage(`Ошибка: ${err.message}`);
    }
}

async function extractFromFolder(folder) {
    try {
        const files = await findBinFiles(folder);
        
        for (const file of files) {
            await extractBinFile(file);
        }
        
        vscode.window.showInformationMessage(`Обработано файлов: ${files.length}`);
    } catch (err) {
        vscode.window.showErrorMessage(`Ошибка: ${err.message}`);
    }
}

async function findBinFiles(dir) {
    const files = [];
    const entries = await fs.readdir(dir, { withFileTypes: true });
    
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            files.push(...await findBinFiles(fullPath));
        } else if (entry.name.endsWith('.bin')) {
            files.push(fullPath);
        }
    }
    
    return files;
}

async function extractModuleFromBin(binPath) {
    const buffer = await fs.readFile(binPath);
    
    const addressBlock1 = 18;
    const addressBlock3 = 624;
    const addressBlock4 = 691;
    const offsetEndAddress = 722;
    const hexSize = 8;
    const specialHex = '7fffffff';
    
    const check = readHexFromBuffer(buffer, addressBlock1 + hexSize * 2 + 2, hexSize);
    if (check !== specialHex) {
        return undefined;
    }
    
    const lastBlock3 = readHexFromBuffer(buffer, addressBlock3 + hexSize * 2 + 2, hexSize);
    
    let startAddress, endAddress;
    
    if (lastBlock3 === specialHex) {
        startAddress = addressBlock4 + hexSize * 3 + 2;
        const hexValue = readHexFromBuffer(buffer, addressBlock4 + hexSize + 1, hexSize);
        endAddress = hexToDecimal(hexValue) + offsetEndAddress;
    } else {
        const hexValue = readHexFromBuffer(buffer, addressBlock3 + hexSize + 1, hexSize);
        startAddress = hexToDecimal(hexValue) + offsetEndAddress + hexSize * 3 + 2;
        endAddress = hexToDecimal(lastBlock3);
    }
    
    const codeSize = endAddress - startAddress;
    if (codeSize <= 0) {
        return undefined;
    }
    
    let result = buffer.slice(startAddress, endAddress).toString('utf8');
    result = result.replace(/\uFEFF/g, '');
    result = result.replace(/\0/g, '');
    
    return result;
}

function readHexFromBuffer(buffer, offset, length) {
    const slice = buffer.slice(offset, offset + length);
    return slice.toString('utf8').toLowerCase();
}

function hexToDecimal(hex) {
    return parseInt(hex, 16);
}

function deactivate() {}

module.exports = { activate, deactivate };
