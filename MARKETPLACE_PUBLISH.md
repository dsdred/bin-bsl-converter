# 🚀 Публикация в VS Code Marketplace

## Шаг 1: Создание аккаунта Azure DevOps

### 1.1 Регистрация
1. Откройте https://dev.azure.com
2. Нажмите **"Start free"**
3. Войдите через Microsoft аккаунт (или создайте новый)
4. Создайте организацию (например, `dsdred-org`)

### 1.2 Создание Personal Access Token (PAT)

1. В Azure DevOps нажмите на иконку пользователя (справа вверху)
2. Выберите **"Personal access tokens"**
3. Нажмите **"+ New Token"**
4. Заполните:
   - **Name**: `vscode-marketplace`
   - **Organization**: выберите вашу организацию
   - **Expiration**: 90 days (или Custom)
   - **Scopes**: выберите **"Custom defined"**
   - Найдите **"Marketplace"** и отметьте:
     - ✅ **Acquire** (read)
     - ✅ **Publish** (read, write)
     - ✅ **Manage** (read, write)
5. Нажмите **"Create"**
6. **ВАЖНО**: Скопируйте токен и сохраните в безопасном месте!
   - Он показывается только один раз
   - Формат: `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

---

## Шаг 2: Создание Publisher

### 2.1 Регистрация Publisher

1. Откройте https://marketplace.visualstudio.com/manage
2. Войдите через тот же Microsoft аккаунт
3. Нажмите **"Create publisher"**
4. Заполните:
   - **ID**: `dsdred` (уникальный идентификатор, только латиница и цифры)
   - **Name**: `dsdred` (отображаемое имя)
   - **Email**: ваш email
5. Нажмите **"Create"**

### 2.2 Обновление package.json

Добавьте publisher в package.json:

```json
{
  "name": "bin-bsl-converter",
  "publisher": "dsdred",
  "version": "1.0.0",
  ...
}
```

---

## Шаг 3: Публикация плагина

### 3.1 Вход через vsce

Откройте терминал в папке проекта:

```bash
cd e:\PRJ\BonsAI

# Вход в marketplace (используйте ваш PAT токен)
vsce login dsdred
# Введите токен, который вы скопировали ранее
```

### 3.2 Публикация

```bash
# Публикация плагина
vsce publish
```

Или с указанием версии:

```bash
# Публикация с увеличением версии
vsce publish patch  # 1.0.0 -> 1.0.1
vsce publish minor  # 1.0.0 -> 1.1.0
vsce publish major  # 1.0.0 -> 2.0.0
```

---

## Шаг 4: Проверка публикации

### 4.1 Проверка в Marketplace

1. Откройте https://marketplace.visualstudio.com/
2. Найдите ваш плагин: `bin-bsl-converter`
3. Или прямая ссылка: https://marketplace.visualstudio.com/items?itemName=dsdred.bin-bsl-converter

### 4.2 Установка из VS Code

1. Откройте VS Code
2. Перейдите в Extensions (Ctrl+Shift+X)
3. Найдите: `bin-bsl-converter`
4. Нажмите **Install**

---

## 📋 Полный процесс (кратко)

```bash
# 1. Обновите package.json (добавьте publisher)
# 2. Войдите в marketplace
vsce login dsdred

# 3. Опубликуйте
vsce publish

# Готово! Плагин появится в Marketplace через 5-10 минут
```

---

## 🔄 Обновление плагина

Когда нужно выпустить новую версию:

```bash
# 1. Внесите изменения в код
# 2. Обновите версию и опубликуйте
vsce publish patch

# Или вручную:
# - Измените version в package.json
# - Выполните: vsce publish
```

---

## ⚠️ Важные моменты

### Требования к плагину:

1. ✅ **README.md** - обязателен (у нас есть)
2. ✅ **LICENSE** - обязателен (у нас MIT)
3. ✅ **Иконка** - рекомендуется (можно добавить позже)
4. ✅ **Репозиторий** - рекомендуется (у нас GitHub)

### Добавление иконки (опционально):

1. Создайте иконку 128x128 px (PNG)
2. Сохраните как `icon.png` в корне проекта
3. Добавьте в package.json:
   ```json
   {
     "icon": "icon.png",
     ...
   }
   ```

### Категории и ключевые слова:

Добавьте в package.json для лучшей находимости:

```json
{
  "categories": ["Other", "Programming Languages"],
  "keywords": ["1c", "bsl", "bin", "converter", "1С", "обычные формы"],
  ...
}
```

---

## 🎯 Результат

После публикации ваш плагин будет доступен:

1. **В VS Code Marketplace**: 
   - https://marketplace.visualstudio.com/items?itemName=dsdred.bin-bsl-converter

2. **В VS Code через поиск**:
   - Extensions → Поиск: "bin-bsl-converter"

3. **Через командную строку**:
   ```bash
   code --install-extension dsdred.bin-bsl-converter
   ```

---

## 📊 Статистика

После публикации вы сможете отслеживать:
- Количество установок
- Количество скачиваний
- Рейтинг и отзывы

Статистика доступна на: https://marketplace.visualstudio.com/manage/publishers/dsdred

---

## 🆘 Решение проблем

### Ошибка: "Publisher not found"
- Убедитесь, что создали publisher на marketplace.visualstudio.com
- Проверьте, что ID publisher совпадает в package.json

### Ошибка: "Invalid token"
- Создайте новый PAT токен
- Убедитесь, что выбраны права Marketplace (Acquire, Publish, Manage)

### Ошибка: "Extension name already exists"
- Измените name в package.json на уникальное

---

## ✅ Готово!

Теперь ваш плагин будет доступен всем пользователям VS Code! 🎉
