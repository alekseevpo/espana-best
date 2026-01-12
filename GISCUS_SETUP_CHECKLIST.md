# ✅ Чеклист настройки Giscus

## Текущая конфигурация

- **Репозиторий:** `alekseevpo/espana-best`
- **Repo ID:** `R_kgDOQ3hB0Q`
- **Category ID:** `DIC_kwDOQ3hB0c4C0z6-`
- **Mapping:** `specific` (используется обсуждение #1)
- **Category:** `Announcements`

## Шаги для настройки

### 1. Проверка репозитория GitHub

1. Перейдите: https://github.com/alekseevpo/espana-best
2. Убедитесь, что репозиторий **публичный** (Public)
3. Если приватный → Settings → Danger Zone → Change visibility → Make public

### 2. Включение GitHub Discussions

1. Перейдите: https://github.com/alekseevpo/espana-best/settings
2. В разделе **Features** найдите **Discussions**
3. Включите галочку **Discussions**
4. Нажмите **Set up discussions** (если нужно)

### 3. Создание обсуждения #1

1. Перейдите: https://github.com/alekseevpo/espana-best/discussions
2. Нажмите **New discussion**
3. Выберите категорию **Announcements**
4. **Важно:** Название обсуждения должно быть: `Welcome to espana-best Discussions!` или любое другое
5. Нажмите **Start discussion**
6. Обсуждение получит номер #1 (если это первое обсуждение)

**Альтернативный способ:**
- Если обсуждение #1 уже существует, но называется по-другому — это нормально
- Giscus будет использовать обсуждение #1 независимо от названия

### 4. Проверка работы

1. Запустите локальный сервер: `npm run dev`
2. Откройте: http://localhost:3000
3. Прокрутите до секции "Комментарии и обратная связь"
4. Должен появиться виджет Giscus
5. Попробуйте оставить комментарий (потребуется авторизация через GitHub)

### 5. Настройка на Vercel (для продакшена)

1. Перейдите: https://vercel.com/dashboard
2. Выберите проект `espana-best`
3. Settings → Environment Variables
4. Убедитесь, что переменные установлены:
   - `NEXT_PUBLIC_GISCUS_REPO` = `alekseevpo/espana-best`
   - `NEXT_PUBLIC_GISCUS_REPO_ID` = `R_kgDOQ3hB0Q`
   - `NEXT_PUBLIC_GISCUS_CATEGORY_ID` = `DIC_kwDOQ3hB0c4C0z6-`
5. Передеплойте проект

## Решение проблем

### Комментарии не отображаются

1. **Проверьте консоль браузера (F12):**
   - Ошибки загрузки скрипта?
   - Ошибки CORS?
   - Ошибки 404?

2. **Проверьте Network tab:**
   - Загружается ли `https://giscus.app/client.js`?
   - Какие запросы делает Giscus?

3. **Проверьте GitHub:**
   - Репозиторий публичный?
   - Discussions включены?
   - Обсуждение #1 существует?

4. **Проверьте переменные окружения:**
   - Перезапустите dev-сервер после изменения `.env.local`
   - На Vercel проверьте, что переменные установлены правильно

### Ошибка "Unable to create discussion"

- Это нормально, если используется `mapping="specific"`
- Giscus будет использовать существующее обсуждение #1
- Убедитесь, что обсуждение #1 существует в категории Announcements

### Виджет загружается, но пустой

- Проверьте, что обсуждение #1 существует
- Проверьте категорию обсуждения (должна быть Announcements)
- Попробуйте обновить страницу (hard refresh: Cmd+Shift+R)

## Полезные ссылки

- Giscus Configuration: https://giscus.app
- GitHub Discussions: https://github.com/alekseevpo/espana-best/discussions
- Документация Giscus: https://github.com/giscus/giscus/blob/main/README.md
