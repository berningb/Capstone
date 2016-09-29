// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {nativeScriptBootstrap} from "nativescript-angular/application";

import firebase = require("nativescript-plugin-firebase");

firebase.init({
    persist: true,
}).then(
  (instance) => {
    console.log("firebase.init done");
  },
  (error) => {
    console.log("firebase.init error: " + error);
  }
);
import {AppComponent} from "./app.component";

nativeScriptBootstrap(AppComponent, null, { startPageActionBarHidden: false });