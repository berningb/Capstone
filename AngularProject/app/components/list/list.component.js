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
var $ = require("jquery");
var common_1 = require("@angular/common");
var router_deprecated_1 = require("@angular/router-deprecated");
var db_component_1 = require("../../components/Database/db.component");
var ListComponent = (function () {
    function ListComponent(router, location) {
        this.router = router;
        console.log(db_component_1.DBStructure.getUsers());
        // console.log(JSON.parse(DBStructure.getUsers()));
        // console.log(JSON.parse( DBStructure.getInfo("Users") ));
        // this.personList = JSON.parse( DBStructure.getInfo("/Users") );
        // location.subscribe((path) => {
        //     this.personList = JSON.parse(ApplicationSettings.getString("people", "[]"));
        // });
    }
    ListComponent.prototype.create = function () {
        this.router.navigate(["Create"]);
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: "list",
            templateUrl: "./components/list/list.xml",
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, common_1.Location])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map