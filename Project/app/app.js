"use strict";
var app = require('application');
var firebase = require("nativescript-plugin-firebase");
firebase.init({}).then(function (instance) {
    console.log("firebase.init done");
}, function (error) {
    console.log("firebase.init error: " + error);
});
app.start({ moduleName: "pages/home/home" });
//# sourceMappingURL=app.js.map