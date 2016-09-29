"use strict";
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var application_1 = require("nativescript-angular/application");
var firebase = require("nativescript-plugin-firebase");
firebase.init({
    persist: true,
}).then(function (instance) {
    console.log("firebase.init done");
}, function (error) {
    console.log("firebase.init error: " + error);
});
var app_component_1 = require("./app.component");
application_1.nativeScriptBootstrap(app_component_1.AppComponent, null, { startPageActionBarHidden: false });
//# sourceMappingURL=main.js.map