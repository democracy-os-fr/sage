# [Sage](https://roots.io/sage/)
[![Packagist](https://img.shields.io/packagist/vpre/roots/sage.svg?style=flat-square)](https://packagist.org/packages/roots/sage)
[![devDependency Status](https://img.shields.io/david/dev/roots/sage.svg?style=flat-square)](https://david-dm.org/roots/sage#info=devDependencies)
[![Build Status](https://img.shields.io/travis/roots/sage.svg?style=flat-square)](https://travis-ci.org/roots/sage)
[![Sponsored by ES6.io](https://img.shields.io/badge/%F0%9F%92%9A_Sponsored_by-ES6.io%20Tutorials-brightgreen.svg?style=flat-square)](https://roots.io/r/es6)

**This branch (`drupal-8`) is an attempt to adapt the [Roots.io Sage](https://roots.io/sage/) Wordpress workflow to the Drupal ecosystem.**

This is a **sub** theme (child theme in wordpress terms) for the [Drupal Bootstrap Theme](https://www.drupal.org/project/bootstrap).

The [Composer](https://getcomposer.org/download/) features are not yet compatible with the main Composer dependency system avalaible from a Drupal docroot.

This file is an adaptation of the official documentation.

To learn more about Sage :
+ [official repository](https://github.com/roots/sage)
+ [documentation for Sage 9](https://github.com/roots/docs/tree/sage-9/sage)

To learn more about Drupal Bootstrap Theme :
+ [project page](https://www.drupal.org/project/bootstrap)
+ [documentation](http://drupal-bootstrap.org/api/bootstrap/8)

**THIS THEME IS ONLY COMPATIBLE WITH THE DRUPAL 8.x CORE**

---

Sage is a Drupal starter theme with a modern development workflow.

## Features

* Sass for stylesheets
* ES6 for JavaScript
* [Webpack](https://webpack.github.io/) for compiling assets, optimizing images, and concatenating and minifying files
* [BrowserSync](http://www.browsersync.io/) for synchronized browser testing
* [Bootstrap 3.x](http://getbootstrap.com/) for a front-end framework (can be removed or replaced)

## Requirements

Only for building files :

* [Node.js](http://nodejs.org/) >= 4.5

The Full stack :

* [PHP](http://php.net/manual/en/install.php) >= 5.5.x
* a running [Drupal 8.x](https://www.drupal.org/download) installation >= 8.1.10
* the [Drupal Bootstrap Theme](https://www.drupal.org/project/bootstrap) installed >= 8.x-3.0-rc2


## Theme installation

Install Sage from git in your Drupal themes directory (replace `THEMENAME` below with the name of your theme):

```shell
# @ example.com/site/web/app/themes/
$ git clone https://github.com/democracy-os-fr/sage.git THEMENAME
```

During theme installation you will have the options to:

* Update theme headers (theme name, description, author, etc.)
* Select a CSS framework (Bootstrap, Foundation, none)
* Add Font Awesome
* Configure Browsersync (path to theme, local development URL)

## Theme structure

_replace `THEMENAME` below with the name of your theme_

```shell
themes/your-theme-name/   # → Root of your Sage based theme
├── assets                # → Front-end assets
│   ├── config.json       # → Settings for compiled assets
│   ├── build/            # → Webpack and ESLint config
│   ├── fonts/            # → Theme fonts
│   ├── images/           # → Theme images
│   ├── scripts/          # → Theme JS
│   └── styles/           # → Theme stylesheets
├── composer.json         # → Autoloading for `src/` files
├── composer.lock         # → Composer lock file (never edit)
├── dist/                 # → Built theme assets (never edit)
├── functions.php         # → Composer autoloader, theme includes
├── index.php             # → Never manually edit
├── node_modules/         # → Node.js packages (never edit)
├── package.json          # → Node.js dependencies and scripts
├── screenshot.png        # → Theme screenshot for WP admin
├── src/                  # → Theme PHP
│   ├── lib/Sage/         # → Blade implementation, asset manifest
│   ├── admin.php         # → Theme customizer setup
│   ├── filters.php       # → Theme filters
│   ├── helpers.php       # → Helper functions
│   └── setup.php         # → Theme setup
├── style.css             # → Theme meta information
├── templates/            # → Theme templates
│   ├── layouts/          # → Base templates
│   └── partials/         # → Partial templates
└── vendor/               # → Composer packages (never edit)
```

## Theme setup

_replace `THEMENAME` below with the name of your theme_

1. Rename `./THEMENAME/THEMENAME.starterkit.yml` to match
   `./THEMENAME/THEMENAME.info.yml`.
2. Open `./THEMENAME/THEMENAME.info.yml` and change the name, description and any
   other properties to suite your needs. Make sure to rename the library name as
   well:  `- THEMENAME/globalstyling`.
3. Rename the sub-theme configuration files, located at:
   `./THEMENAME.libraries.yml`.
4. Rename the sub-theme configuration files, located at:
   `./THEMENAME/config/install/THEMENAME.settings.yml` and
   `./THEMENAME/config/schema/THEMENAME.schema.yml`.
5. Open `./THEMENAME/config/schema/THEMENAME.schema.yml` and rename
   `- THEMENAME.settings:` and `'THEMETITLE settings'`

## Theme development

Sage uses [Webpack](https://webpack.github.io/) as a build tool and [npm](https://www.npmjs.com/) to manage front-end packages.

### Install dependencies

From the command line on your host machine (not on your Vagrant development box), navigate to the theme directory then run `yarn`:

```shell
# @ themes/your-theme-name/
$ yarn
```

You now have all the necessary dependencies to run the build process.

### Build commands

* `yarn run start` — Compile assets when file changes are made, start Browsersync session
* `yarn run build` — Compile and optimize the files in your assets directory
* `yarn run build:production` — Compile assets for production

#### Additional commands

* `yarn run rmdist` — Remove your `dist/` folder
* `yarn run lint` — Run ESLint against your assets and build scripts
* `composer test` — Check your PHP for PSR-2 compliance with `phpcs`

### Using Browsersync

To use Browsersync you need to update `devUrl` at the bottom of `assets/config.json` to reflect your local development hostname.

If your local development URL is `https://project-name.dev`, update the file to read:
```json
...
  "devUrl": "https://project-name.dev",
...
```

If you are not using [Bedrock](https://roots.io/bedrock/), update `publicPath` to reflect your folder structure:

```json
...
  "publicPath": "/wp-content/themes/sage"
...
```

By default, Browsersync will use webpack's [HMR](https://webpack.github.io/docs/hot-module-replacement.html), which won't trigger a page reload in your browser.

If you would like to force Browsersync to reload the page whenever certain file types are edited, then add them to `watch` in `assets/config.json`.

```json
...
  "watch": [
    "assets/scripts/**/*.js",
    "templates/**/*.php",
    "src/**/*.php"
  ],
...
```

## Documentation

Sage 8 documentation is available at [https://roots.io/sage/docs/](https://roots.io/sage/docs/).

Sage 9 documentation is currently in progress and can be viewed at [https://github.com/roots/docs/tree/sage-9/sage](https://github.com/roots/docs/tree/sage-9/sage).

## Contributing

Contributions are welcome from everyone. We have [contributing guidelines](https://github.com/roots/guidelines/blob/master/CONTRIBUTING.md) to help you get started.

## Community

Keep track of development and community news.

* Participate on the [Roots Discourse](https://discourse.roots.io/)
* Follow [@rootswp on Twitter](https://twitter.com/rootswp)
* Read and subscribe to the [Roots Blog](https://roots.io/blog/)
* Subscribe to the [Roots Newsletter](https://roots.io/subscribe/)
* Listen to the [Roots Radio podcast](https://roots.io/podcast/)
