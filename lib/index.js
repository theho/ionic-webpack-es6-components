import 'ionic-sdk/release/js/ionic.bundle';
import 'expose?_!lodash';
import 'wp-api-angularjs/dist/wp-api-angularjs.bundle';

var namespace = 'main';

// Our modules
import modConstant from './constant.js';
import modConfigIonic from './config/ionic.config.js';
import modConfigRouter from './config/router.config.js';

import modRun from './run.js';
import modHome from './home/home.module.js';
import modMenu from './menu/menu.module.js';

// Style entry point
import './scss/main';

// Create our prototype module
let mod = angular.module(namespace, [
    'ionic',
    'ui.router',

    modConstant(namespace),
    modHome(namespace),
    modMenu(namespace),
]);
// ROUTER CONFIG
mod.config(modConfigRouter);
// IONIC CONFIG
mod.config(modConfigIonic);
// Run
mod.run(modRun);

export default mod = mod.name;
