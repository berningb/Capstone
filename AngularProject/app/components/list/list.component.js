"use strict";
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