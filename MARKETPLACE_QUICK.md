# 🚀 Быстрая публикация в VS Code Marketplace

## 📋 Краткая инструкция (3 шага)

### 1️⃣ Создайте Publisher (один раз)

1. Откройте https://marketplace.visualstudio.com/manage
2. Войдите через Microsoft аккаунт
3. Нажмите **"Create publisher"**
4. ID: `dsdred`, Name: `dsdred`

### 2️⃣ Получите токен (один раз)

1. Откройте https://dev.azure.com
2. User Settings → Personal Access Tokens → New Token
3. Scopes: **Marketplace** (Acquire, Publish, Manage)
4. Скопируйте токен (показывается один раз!)

### 3️⃣ Опубликуйте

```bash
cd e:\PRJ\BonsAI

# Войдите (используйте токен из шага 2)
vsce login dsdred

# Опубликуйте
vsce publish
```

---

## ✅ Готово!

Через 5-10 минут плагин появится в VS Code Marketplace:
- https://marketplace.visualstudio.com/items?itemName=dsdred.bin-bsl-converter

Пользователи смогут установить через:
- Extensions → Поиск: "bin-bsl-converter"
- Или: `code --install-extension dsdred.bin-bsl-converter`

---

## 📖 Подробная инструкция

Откройте файл **MARKETPLACE_PUBLISH.md** для детальной инструкции со скриншотами и решением проблем.

---

## 🔄 Обновление плагина

Когда нужно выпустить новую версию:

```bash
# Внесите изменения в код
# Затем:
vsce publish patch  # 1.0.0 -> 1.0.1
```

---

## 📊 Два способа распространения

### Способ 1: GitHub Releases (текущий)
✅ Уже настроено
- Пользователи скачивают .vsix
- Устанавливают вручную

### Способ 2: VS Code Marketplace (рекомендуется)
🚀 Следуйте инструкции выше
- Плагин в официальном магазине
- Автоматические обновления
- Больше пользователей

**Можно использовать оба способа одновременно!**
