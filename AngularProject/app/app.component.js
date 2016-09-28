"use strict";
var core_1 = require("@angular/core");
var router_deprecated_1 = require("@angular/router-deprecated");
var ns_router_deprecated_1 = require("nativescript-angular/router-deprecated/ns-router-deprecated");
var list_component_1 = require("./components/list/list.component");
var create_component_1 = require("./components/create/create.component");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            directives: [ns_router_deprecated_1.NS_ROUTER_DIRECTIVES],
            providers: [ns_router_deprecated_1.NS_ROUTER_PROVIDERS],
            template: "<page-router-outlet></page-router-outlet>",
        }),
        router_deprecated_1.RouteConfig([
            { path: "/list", component: list_component_1.ListComponent, name: "List", useAsDefault: true },
            { path: "/create", component: create_component_1.CreateComponent, name: "Create" }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map