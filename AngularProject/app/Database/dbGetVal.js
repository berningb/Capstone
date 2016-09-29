"use strict";
var firebase = require("nativescript-plugin-firebase");
function setValue(root, id, value) {
    firebase.setValue('/' + root, { id: value });
}
function remove(id) {
    firebase.remove("/" + id);
}
function update(root, id, key) {
    firebase.update('/' + root, { id: key });
}
function createUser(firstname, lastname, age, email) {
    firebase.push('/users', {
        'first': firstname,
        'last': lastname,
        'age': age,
        'email': email
    }).then(function (result) {
        console.log("created key: " + result.key);
    });
}
function createTrip() {
}
//# sourceMappingURL=dbGetVal.js.map