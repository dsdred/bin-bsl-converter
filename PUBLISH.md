# Инструкция по публикации на GitHub

## Шаг 1: Создание репозитория на GitHub

1. Откройте https://github.com
2. Нажмите кнопку **"New"** (или "+" → "New repository")
3. Заполните:
   - **Repository name**: `bin-bsl-converter`
   - **Description**: `Плагин VS Code для конвертации файлов Form.bin ↔ Module.bsl из конфигураций 1С`
   - **Public** (чтобы другие могли скачать)
   - ✅ Add a README file (НЕ ставьте галочку, у нас уже есть README)
   - ✅ Add .gitignore (НЕ ставьте, у нас уже есть)
   - ✅ Choose a license (НЕ ставьте, у нас уже есть MIT)
4. Нажмите **"Create repository"**

## Шаг 2: Инициализация Git и загрузка

Откройте терминал в папке проекта и выполните:

```bash
cd e:\PRJ\BonsAI

# Инициализация Git
git init

# Добавление всех файлов
git add .

# Первый коммит
git commit -m "Initial commit: BIN-BSL Converter plugin"

# Добавление удалённого репозитория
git remote add origin https://github.com/dsdred/bin-bsl-converter.git

# Отправка на GitHub
git branch -M main
git push -u origin main
```

## Шаг 3: Создание релиза с .vsix файлом

### 3.1 Упаковка плагина

```bash
# Установка vsce (если ещё не установлен)
npm install -g @vscode/vsce

# Упаковка плагина
vsce package
```

Будет создан файл `bin-bsl-converter-1.0.0.vsix`

### 3.2 Создание релиза на GitHub

1. Откройте ваш репозиторий на GitHub
2. Перейдите на вкладку **"Releases"** (справа)
3. Нажмите **"Create a new release"**
4. Заполните:
   - **Tag version**: `v1.0.0`
   - **Release title**: `v1.0.0 - Первый релиз`
   - **Description**: 
     ```
     ## Возможности
     - Извлечение модуля из .bin в .bsl
     - Сборка .bin из .bsl
     - Пакетная обработка папок
     
     ## Установка
     1. Скачайте файл `bin-bsl-converter-1.0.0.vsix`
     2. В VS Code: Extensions → ... → Install from VSIX
     3. Выберите скачанный файл
     ```
5. Перетащите файл `bin-bsl-converter-1.0.0.vsix` в область **"Attach binaries"**
6. Нажмите **"Publish release"**

## Шаг 4: Обновление README с инструкцией по установке

Добавьте в README.md раздел:

```markdown
## Установка

### Способ 1: Из релиза (рекомендуется)
1. Перейдите на [страницу релизов](https://github.com/dsdred/bin-bsl-converter/releases)
2. Скачайте файл `bin-bsl-converter-1.0.0.vsix`
3. В VS Code: `Extensions` → `...` → `Install from VSIX`
4. Выберите скачанный файл

### Способ 2: Из исходников
\`\`\`bash
git clone https://github.com/dsdred/bin-bsl-converter.git
cd bin-bsl-converter
npm install
npm install -g @vscode/vsce
vsce package
code --install-extension bin-bsl-converter-1.0.0.vsix
\`\`\`
```

## Шаг 5: Добавление бейджей (опционально)

Добавьте в начало README.md:

```markdown
# BIN-BSL Converter

![Version](https://img.shields.io/github/v/release/dsdred/bin-bsl-converter)
![Downloads](https://img.shields.io/github/downloads/dsdred/bin-bsl-converter/total)
![License](https://img.shields.io/github/license/dsdred/bin-bsl-converter)
```

## Готово! 🎉

Теперь пользователи могут:
- Просматривать код на GitHub
- Скачивать .vsix файл из релизов
- Устанавливать плагин в VS Code
- Создавать Issues для багов и предложений
