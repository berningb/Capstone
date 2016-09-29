import {Component} from "@angular/core";
import {Location} from "@angular/common";
import firebase = require("nativescript-plugin-firebase");
import * as ApplicationSettings from "application-settings";

@Component({
    selector: "create",
    templateUrl: "./components/create/create.xml",
})
export class CreateComponent {
    
    private location: Location;
    public personList: Array<Object>;
    public firstname: string;
    public lastname: string;
    public Name: string;
   

    constructor(location: Location) {
        this.location = location;
        this.personList = JSON.parse(ApplicationSettings.getString("people", "[]"));
        this.firstname = "";
        this.lastname = "";
        
        
    }
    save() {
        this.Name = this.firstname;
        if(this.firstname !="" && this.lastname !="") {
              firebase.push(
                    '/Users',
                    {
                    'id': 
                    'first': this.firstname,
                    'last': this.lastname
                    }
                ).then(
                    function (result) {
                    console.log("created key: " + result.key);
                        }
                );
            // this.personList.push({firstname: this.firstname, lastname: this.lastname});
            // ApplicationSettings.setString("people", JSON.stringify(this.personList));
            this.location.back();
        }
    }
}
