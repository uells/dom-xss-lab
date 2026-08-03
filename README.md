# DOM XSS Lab

Демонстрационная лаборатория, посвящённая распространённым подходам, приводящим к DOM-based XSS.

Для каждого опасного DOM-приёмника приведена демонстрация: уязвимая реализация и её безопасный аналог.

## Приёмники

- `innerHTML`
- `insertAdjacentHTML`
- `document.write`
- `onclick`-атрибут
- `eval` / `setTimeout` (строка)
- `iframe.srcdoc`
- `outerHTML`
- `document.referrer`

## Стек

- Vanilla HTML / CSS / JS
- Tailwind CSS (CLI-сборка)

## Запуск

```
npm install
npm run watch:css
```

Дальше открыть `index.html` через любой локальный сервер.