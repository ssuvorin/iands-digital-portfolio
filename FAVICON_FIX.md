# Исправление проблемы с Favicon в Vercel

## Проблема
Favicon не отображался в Vercel из-за нескольких проблем:

1. **Устаревший файл `head.tsx`** - в Next.js 13+ с App Router этот файл больше не используется
2. **Отсутствие файла `favicon.ico`** - браузеры часто предпочитают ICO формат
3. **Неправильная конфигурация в `layout.tsx`** - неполная настройка иконок

## Решение

### 1. Удален устаревший файл `app/head.tsx`

### 2. Обновлена конфигурация в `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  // ... другие настройки
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: '/favicon.ico',
  },
  // ... остальные настройки
}
```

### 3. Созданы дополнительные файлы иконок:
- `public/favicon.ico` - ICO версия для лучшей совместимости
- `public/favicon.png` - PNG версия 32x32
- `public/apple-touch-icon.png` - Apple Touch Icon 180x180

### 4. Обновлен `public/manifest.json`:
```json
{
  "icons": [
    {
      "src": "/favicon.svg",
      "sizes": "any",
      "type": "image/svg+xml",
      "purpose": "any"
    },
    {
      "src": "/favicon.png",
      "sizes": "32x32",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "/apple-touch-icon.png",
      "sizes": "180x180",
      "type": "image/png",
      "purpose": "any"
    }
  ]
}
```

### 5. Обновлен `public/browserconfig.xml`:
```xml
<square150x150logo src="/apple-touch-icon.png"/>
```

## Проверка

После деплоя в Vercel favicon должен отображаться:
- В браузере (вкладка)
- В закладках
- На мобильных устройствах
- В PWA (если установлено)

## Дополнительные рекомендации

1. **Кэширование**: Vercel может кэшировать статические файлы. При необходимости добавьте версию к URL иконок.

2. **Тестирование**: Проверьте favicon на разных устройствах и браузерах.

3. **Размеры**: Убедитесь, что все иконки имеют правильные размеры и формат.

4. **Мета-теги**: В `layout.tsx` уже настроены все необходимые мета-теги для различных платформ. 