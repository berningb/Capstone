"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ApplicationSettings = require("application-settings");
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
            //   createUser("rth","thid","tjiasf","dfjk");
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