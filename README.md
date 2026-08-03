# DOM XSS Lab

Демонстрационная лаборатория, посвящённая распространённым подходам, приводящим к DOM-based XSS.

Для каждого опасного DOM-приёмника приведена демонстрация: уязвимая реализация и её безопасный аналог.

<img width="956" height="693" alt="изображение" src="https://github.com/user-attachments/assets/9d7d4fd9-5310-4433-a167-d55ff41e0a93" />


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
