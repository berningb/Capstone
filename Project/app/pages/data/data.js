"use strict";
var BasePage_1 = require("../../shared/BasePage");
var observable_1 = require("data/observable");
var vm = new observable_1.Observable();
var firstname = new observable_1.Observable({ myText: "" });
var lastname = new observable_1.Observable({ myText: "" });
var DataPage = (function (_super) {
    __extends(DataPage, _super);
    function DataPage() {
        _super.apply(this, arguments);
    }
    DataPage.prototype.mainContentLoaded = function (args) {
        //set the bindingContext for the DataPage content here
        var view = args.object;
        view.bindingContext = vm;
    };
    DataPage.prototype.save = function () {
        var thing = firstname;
        console.log(thing);
        // if(firstname !="" && this.lastname !="") {
        //     this.firstname = "hi";
        //     this.lastname = "hi";
        //     firebase.setValue(
        //         '/Users/'+this.firstname,
        //         {
        //         'first': this.firstname,
        //         'last': this.lastname
        //         }
        //     );
        // }
    };
    return DataPage;
}(BasePage_1.BasePage));
module.exports = new DataPage();
//# sourceMappingURL=data.js.map