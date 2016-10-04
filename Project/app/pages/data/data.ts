import {BasePage} from "../../shared/BasePage";
import {topmost} from "ui/frame";
import {Observable, EventData} from "data/observable";
import firebase = require("nativescript-plugin-firebase");
import {View} from "ui/core/view";


let vm = new Observable();
let firstname = new Observable({ myText: "" });
let lastname = new Observable({ myText: "" });
class DataPage extends BasePage{
    

    mainContentLoaded(args:EventData){
        //set the bindingContext for the DataPage content here
        let view = <View>args.object;
        view.bindingContext = vm;
    }

    save() {
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
    }
}
export = new DataPage();
