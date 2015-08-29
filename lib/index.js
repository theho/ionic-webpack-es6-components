import angularMaterial from 'angular-material';
import 'ionic-sdk/release/js/ionic.bundle';
import 'expose?_!lodash';

var namespace = 'main';

// Our modules
import modConstant from './constant.js';
import modConfigIonic from './config/ionic.config.js';
import modConfigRouter from './config/router.config.js';
import modConfigMaterial from './config/material.config.js';

import modRun from './run.js';
import modHome from './home/home.module.js';
import modMenu from './menu/menu.module.js';


// Material design css
import 'angular-material/angular-material.css';
// Style entry point
import './scss/main';

// Create our prototype module
let mod = angular.module(namespace, [
  'ionic',
  'ui.router',
  angularMaterial,

  modConstant(namespace),
  modHome(namespace),
  modMenu(namespace),
]);
// ROUTER CONFIG
mod.config(modConfigRouter);
// IONIC CONFIG
mod.config(modConfigIonic);
// ngMaterial Config
mod.config(modConfigMaterial);

// Run
mod.run(modRun);

export default mod = mod.name;
