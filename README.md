# XDATA

xdata is a opensource utility used to encode, decode, encrypt. xdata can run on website, desktop, command line tools.

- [xdata-web](https://github.com/inchingorg/xdata-web)
- [xdata-cli](https://github.com/inchingorg/xdata-cli)
- [xdata](https://github.com/inchingorg/xdata)

### Usage

- Online: [XDATA](https://inchingorg.github.io/xdata-web/#/)
- Download Desktop: <https://github.com/inchingorg/xdata-web/releases/>

## Quick start

**Make sure you have Node version >= 5.0 and NPM >= 3**

You should install these globals with `npm install --global`:

* `webpack` (`npm install --global webpack`)
* `webpack-dev-server` (`npm install --global webpack-dev-server`)
* `karma` (`npm install --global karma-cli`)
* `protractor` (`npm install --global protractor`)
* `typescript` (`npm install --global typescript`)

```bash
# install the repo with npm
npm install

# start the server
npm start

# use Hot Module Replacement
npm run server:dev:hmr

# if you're in China use cnpm
# https://github.com/cnpm/cnpm
```

go to [http://0.0.0.0:3000](http://0.0.0.0:3000) or [http://localhost:3000](http://localhost:3000) in your browser

Build and depoly to GitHub:

```bash
npm run github-deploy
```

Package desktop with electron:

```bash
npm run package
```


## Development

Start on [AngularClass/angular2-webpack-starter](https://github.com/AngularClass/angular2-webpack-starter)

An Angular 2 starter kit featuring

- [Angular 2](https://angular.io)
- [Material](https://github.com/angular/material2)
- [Karma](https://karma-runner.github.io/)、[Protractor](https://angular.github.io/protractor/)、[Jasmine](https://github.com/jasmine/jasmine)、[Istanbul](https://github.com/gotwarlost/istanbul)
- [TypeScript](http://www.typescriptlang.org/)
- [Webpack 2](http://webpack.github.io/)
