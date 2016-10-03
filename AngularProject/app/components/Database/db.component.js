"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var dialogs = require("ui/dialogs");
var DBStructure = (function () {
    function DBStructure() {
    }
    DBStructure.prototype.setValue = function (root, id, value) {
        firebase.setValue('/' + root, { id: value });
    };
    DBStructure.prototype.remove = function (id) {
        firebase.remove("/" + id);
    };
    DBStructure.prototype.update = function (root, id, key) {
        firebase.update('/' + root, { id: key });
    };
    DBStructure.createUser = function (firstname, lastname, age, email) {
        firebase.setValue('/Users/' + firstname, {
            'first': firstname,
            'last': lastname,
            'age': age,
            'email': email
        });
    };
    DBStructure.prototype.createTrip = function () {
    };
    DBStructure.getUsers = function () {
        var path = "/Users";
        var thing = "";
        var oh = "";
        var onValueEvent = function (result) {
            if (!result.error) {
                thing = (JSON.stringify(result.value));
                var gim = JSON.parse(thing);
                console.log(Object.keys(gim).toString());
                oh += Object.keys(gim).toString();
            }
        };
        console.log(oh);
        firebase.query(onValueEvent, path, {
            singleEvent: true,
            orderBy: {
                type: firebase.QueryOrderByType.KEY
            }
        });
        // return JSON.parse(thing);
    };
    DBStructure = __decorate([
        core_1.Component({
            selector: "db"
        }), 
        __metadata('design:paramtypes', [])
    ], DBStructure);
    return DBStructure;
}());
exports.DBStructure = DBStructure;
//# sourceMappingURL=db.component.js.map