/// <reference path="../../components/Database/db.component.ts" />
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
var common_1 = require("@angular/common");
var ApplicationSettings = require("application-settings");
var db_component_1 = require("../../components/Database/db.component");
var CreateComponent = (function () {
    function CreateComponent(location) {
        this.location = location;
        this.personList = JSON.parse(ApplicationSettings.getString("people", "[]"));
        this.firstname = "";
        this.lastname = "";
    }
    CreateComponent.prototype.save = function () {
        this.Name = this.firstname;
        if (this.firstname != "" && this.lastname != "") {
            db_component_1.DBStructure.createUser(this.firstname, this.lastname, "10", "c");
            // this.personList.push({firstname: this.firstname, lastname: this.lastname});
            // ApplicationSettings.setString("people", JSON.stringify(this.personList));
            this.location.back();
        }
    };
    CreateComponent.prototype.back = function () {
        this.location.back();
    };
    CreateComponent = __decorate([
        core_1.Component({
            selector: "create",
            templateUrl: "./components/create/create.xml",
            styleUrls: ["./components/create/create.css"],
        }), 
        __metadata('design:paramtypes', [common_1.Location])
    ], CreateComponent);
    return CreateComponent;
}());
exports.CreateComponent = CreateComponent;
//# sourceMappingURL=create.component.js.map