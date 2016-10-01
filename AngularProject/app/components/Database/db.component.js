"use strict";
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
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
    DBStructure.prototype.createUser = function (firstname, lastname, age, email) {
        firebase.push('/users', {
            'first': firstname,
            'last': lastname,
            'age': age,
            'email': email
        }).then(function (result) {
            console.log("created key: " + result.key);
        });
    };
    DBStructure.prototype.createTrip = function () {
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