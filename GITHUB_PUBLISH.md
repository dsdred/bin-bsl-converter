# 🚀 Быстрая публикация на GitHub

## ✅ Готово к публикации!

Файл `bin-bsl-converter-1.0.0.vsix` создан и готов к загрузке.

---

## 📋 Пошаговая инструкция

### 1️⃣ Создайте репозиторий на GitHub

1. Откройте https://github.com/new
2. Заполните:
   - **Repository name**: `bin-bsl-converter`
   - **Description**: `Плагин VS Code для конвертации файлов Form.bin ↔ Module.bsl из конфигураций 1С`
   - Выберите **Public**
   - **НЕ** добавляйте README, .gitignore, LICENSE (они уже есть)
3. Нажмите **Create repository**

### 2️⃣ Загрузите код на GitHub

Скопируйте и выполните команды:

```bash
cd e:\PRJ\BonsAI

git init
git add .
git commit -m "Initial commit: BIN-BSL Converter v1.0.0"
git branch -M main
git remote add origin https://github.com/dsdred/bin-bsl-converter.git
git push -u origin main
```

### 3️⃣ Создайте релиз с .vsix файлом

1. Откройте ваш репозиторий на GitHub
2. Нажмите **Releases** → **Create a new release**
3. Заполните:
   - **Tag**: `v1.0.0`
   - **Title**: `v1.0.0 - Первый релиз`
   - **Description**:
     ```
     ## 🎉 Первый релиз BIN-BSL Converter
     
     ### Возможности
     - ✅ Извлечение модуля из .bin в .bsl
     - ✅ Сборка .bin из .bsl
     - ✅ Пакетная обработка папок
     - ✅ Поддержка множественного выбора файлов
     
     ### Установка
     1. Скачайте файл `bin-bsl-converter-1.0.0.vsix` ниже
     2. В VS Code: Extensions → ... → Install from VSIX
     3. Выберите скачанный файл
     4. Готово! 🚀
     ```
4. Перетащите файл `bin-bsl-converter-1.0.0.vsix` в область **Attach binaries**
5. Нажмите **Publish release**

### 4️⃣ Обновите README на GitHub

Все ссылки уже обновлены на `dsdred`. Ничего менять не нужно!

---

## 🎯 Готово!

Теперь пользователи могут:
- 📥 Скачать .vsix из релизов
- 📖 Прочитать документацию
- 🐛 Создавать Issues
- ⭐ Поставить звезду проекту

---

## 📝 Дополнительно

### Обновление версии

Когда будете выпускать новую версию:

```bash
# Обновите версию в package.json
# Затем:
git add .
git commit -m "Release v1.1.0"
git tag v1.1.0
git push origin main --tags
vsce package
# Создайте новый релиз на GitHub с новым .vsix
```

### Публикация в VS Code Marketplace (опционально)

Если хотите опубликовать в официальном магазине VS Code:

1. Создайте аккаунт на https://marketplace.visualstudio.com/
2. Получите Personal Access Token
3. Выполните:
   ```bash
   vsce login ВАШ_PUBLISHER_NAME
   vsce publish
   ```

Подробнее: https://code.visualstudio.com/api/working-with-extensions/publishing-extension
