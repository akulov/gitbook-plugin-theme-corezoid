# Тема офоромления Gitbook к документации облачной ОС Corezoid

Это тема оформления в виде плагина для GitBook начиная с версии 3.0.0.

Плагин добавляет новый блок с логотипом и списком языков, расширяя HTML шаблоны, CSS стили, JS скрипты базовой темы оформления [gitbook-plugin-theme-default](https://www.npmjs.com/package/gitbook-plugin-theme-default).

Дополнительно сделан перевод заголовка результата поиска, отсутствующий в русской локализации (ru.json).

Плагин можно использовать как шаблон-заготовку темы для GitBook.

![Image](https://github.com/akulov/gitbook-plugin-theme-corezoid/blob/master/preview.png)

## Установка

Добавить плагин темы в файл конфигурации книги `book.json`:

```js
{
    "plugins": [
        "theme-corezoid"
    ]
}
```

И выполнить установку командой:

``` bash
gitbook install
```