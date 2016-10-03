import {Component} from "@angular/core";
var $ = require("jquery");
import {Location} from "@angular/common";
import {Router} from "@angular/router-deprecated";
import firebase = require("nativescript-plugin-firebase");
import * as ApplicationSettings from "application-settings";

import {DBStructure} from "../../components/Database/db.component";


@Component({
    selector: "list",
    templateUrl: "./components/list/list.xml",
})
export class ListComponent {
    private router: Router;
    public personList: Array<Object>;

    constructor(router: Router, location: Location) {
        this.router = router;
        console.log(DBStructure.getUsers());
        // console.log(JSON.parse(DBStructure.getUsers()));
        // console.log(JSON.parse( DBStructure.getInfo("Users") ));
        // this.personList = JSON.parse( DBStructure.getInfo("/Users") );
        // location.subscribe((path) => {
        //     this.personList = JSON.parse(ApplicationSettings.getString("people", "[]"));
        // });
    }


    create() {
        this.router.navigate(["Create"]);
    }

   
}
