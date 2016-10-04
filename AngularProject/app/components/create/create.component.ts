/// <reference path="../../components/Database/db.component.ts" />

import {Component} from "@angular/core";
import {Location} from "@angular/common";
import firebase = require("nativescript-plugin-firebase");
import * as ApplicationSettings from "application-settings";

import {DBStructure} from "../../components/Database/db.component";


@Component({
    selector: "create",
    templateUrl: "./components/create/create.xml",
    styleUrls: ["./components/create/create.css"],
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
        DBStructure.createUser(this.firstname,this.lastname, "10","c");
            // this.personList.push({firstname: this.firstname, lastname: this.lastname});
            // ApplicationSettings.setString("people", JSON.stringify(this.personList));
            this.location.back();
        }
    }
    back() {
        this.location.back();
    }
}
