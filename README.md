### Ionic-Webpack-ES6

Starter Project for Ionic using ES6.

Originally forked and inspired by: 
[ios-android-wordpress-ionic-webpack-ES6](https://github.com/shprink/ios-android-wordpress-ionic-webpack-ES6)
[NG6-Starter](https://github.com/angular-class/NG6-starter)

### Install

```
cp config/default.config.json config/config.json
npm install

# Cordova
cp config.dist.xml config.xml
npm run installCordova
```

### Run

```
# Web
npm run devserver

# Android
npm run runAndroid

# iOS
npm run runIosEmulator
npm run runIosDevice
```

### Generate ES6 Component

```
gulp component --name componentName

```
