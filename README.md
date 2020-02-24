# Onewheel Selector
https://onewheel-selector.web.app

> The best way to find your ideal ride

## Local Development

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Hosting

Hosting is managed through the [firebase console](https://console.firebase.google.com/u/0/project/rainbow-dragon/hosting/sites/onewheel-selector).

This site will automatically be deployed by our workflows on each commit into the master branch.

If you do need to deploy, ensure you have the [firebase CLI](https://firebase.google.com/docs/cli) installed and run:
``` bash
# install dependencies
$ npm install

# generate static project
$ npm run generate

# deploy projey
$ firebase deploy
```