import 'expose?_!lodash';
import 'ionic-sdk/release/js/ionic.bundle';

var namespace = 'main';

// Our modules
import modConstant from './constant.js';
import modConfigIonic from './config/ionic.config.js';
import modNav from './nav/nav.config.js';

import modRun from './run.js';
import runCordova from './run/cordova.run.js';

import modHome from './home/home.module.js';
import modMenu from './menu/menu.module.js';
import modApi from './api/api.module.js';

import tabDash from 'components/tab_example/tabDash/tabDash.module.js';
import tabChats from 'components/tab_example/tabChats/tabChats.module.js';
import tabAccount from 'components/tab_example/tabAccount/tabAccount.module.js';
import tabChatDetail from 'components/tab_example/tabChatDetail/tabChatDetail.module.js';

// Style entry point
import './scss/main';

// Create our prototype module
let mod = angular.module(namespace, [
  'ionic',
  'ui.router',

  modConstant.name,
  modHome.name,
  modMenu.name,
  modApi.name,

  tabDash.name,
  tabChats.name,
  tabAccount.name,
  tabChatDetail.name,
]);
// Nav Config
mod.config(modNav);

// IONIC CONFIG
mod.config(modConfigIonic);


// Run
mod.run(modRun);
mod.run(runCordova);

export default mod = mod.name;
