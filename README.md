# Gitbook custom theme for Corezoid cloud OS documentation

This is a plugin for Gitbook since version 3.0.0.

It adds a new block with logo and list of languages. Corezoid theme extends HTML templates, CSS styles and JS scripts of a base GitBook theme [gitbook-plugin-theme-default](https://www.npmjs.com/package/gitbook-plugin-theme-default).

Additionally, translated title of the search result that does not exist in the Russian localization (ru.json).

The plugin can be used as a blank theme template for GitBook.

![Image](https://github.com/akulov/gitbook-plugin-theme-corezoid/raw/master/preview.png)

## Usage

Add the theme to your book's configuration `book.json`:

```js
{
    "plugins": [
        "theme-corezoid"
    ],
    "variables": {
        "themeCorezoid": {
            "langs": [
                "ru",
                "en"
            ]
        }
    }
},
```

Install by command:

``` bash
gitbook install
```

## Links

This theme on [github.com](https://github.com/akulov/gitbook-plugin-theme-corezoid), [plugins.gitbook.com](https://plugins.gitbook.com/plugin/theme-corezoid), [npmjs.com](https://www.npmjs.com/package/gitbook-plugin-theme-corezoid)