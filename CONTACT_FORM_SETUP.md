# Настройка отправки заявок из формы контакта

## Текущее состояние

Заявки из формы контакта теперь отправляются на email `hello@ins.digital` через API route `/api/contact`.

## Настройка

### 1. Создайте файл `.env.local` в корне проекта:

```env
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### 2. Настройка Gmail для отправки:

1. **Включите 2FA** в вашем Google аккаунте
2. **Создайте App Password**:
   - Перейдите в [Google Account Settings](https://myaccount.google.com/)
   - Security → 2-Step Verification → App passwords
   - Создайте новый пароль для "Mail"
3. **Используйте App Password** вместо обычного пароля в `EMAIL_PASS`

### 3. Альтернативные email сервисы:

#### Gmail (рекомендуется):
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

#### Outlook/Hotmail:
```env
EMAIL_USER=your-email@outlook.com
EMAIL_PASS=your-password
```

#### Custom SMTP:
```env
EMAIL_HOST=smtp.your-provider.com
EMAIL_PORT=587
EMAIL_USER=your-email@domain.com
EMAIL_PASS=your-password
```

## Структура заявки

Каждая заявка содержит:
- **Имя клиента**
- **Email клиента**
- **Название компании** (опционально)
- **Выбранная услуга** (опционально)
- **Бюджет проекта** (опционально)
- **Детали проекта**

## Получатели

Заявки отправляются на: `hello@ins.digital`

## Безопасность

- Все данные валидируются на сервере
- Email пароли хранятся в переменных окружения
- Обработка ошибок настроена

## Тестирование

1. Заполните форму на `/contact`
2. Отправьте тестовую заявку
3. Проверьте получение email на `hello@ins.digital`

## Альтернативные решения

### 1. Formspree (проще в настройке):
```jsx
// В ContactClient.tsx
const handleSubmit = async (e) => {
  e.preventDefault()
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
}
```

### 2. Netlify Forms:
```jsx
// Добавьте data-netlify="true" к форме
<form data-netlify="true" name="contact">
```

### 3. База данных:
Можно сохранять заявки в базу данных (MongoDB, PostgreSQL) вместо email. 