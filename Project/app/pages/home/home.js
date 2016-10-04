"use strict";
var BasePage_1 = require("../../shared/BasePage");
var observable_1 = require("data/observable");
var vm = new observable_1.Observable({ myText: 'This is the home page' });
var HomePage = (function (_super) {
    __extends(HomePage, _super);
    function HomePage() {
        _super.apply(this, arguments);
    }
    //use this function to populate the bindingContext specific to this page
    //make sure the root element of the main content is setting "mainContentLoaded" as its loaded event
    HomePage.prototype.mainContentLoaded = function (args) {
        var view = args.object;
        view.bindingContext = vm;
    };
    return HomePage;
}(BasePage_1.BasePage));
module.exports = new HomePage();
//# sourceMappingURL=home.js.map