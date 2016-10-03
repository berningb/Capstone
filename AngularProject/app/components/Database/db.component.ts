import {Component} from "@angular/core";
import firebase = require("nativescript-plugin-firebase");
import {CreateComponent} from "../../components/create/create.component";
var dialogs = require("ui/dialogs");


@Component({
    selector: "db"
})
export class DBStructure {
        input : string;

    setValue(root,id,value) {
        firebase.setValue(
          '/' + root,
          {id: value}
      );
    }
    
    remove(id) {
        firebase.remove("/" + id);
    }
    
    update(root, id, key) {
        firebase.update(
            '/'+ root,
            {id:key}
        );
    }
    
    static createUser(firstname:string, lastname:string, age:string, email:string) {
          firebase.setValue(
          '/Users/'+firstname,
          {
                'first': firstname,
                'last': lastname,
                'age': age,
                'email': email
          }
      );
    }
    
    createTrip() {
        
    }

    
    static getUsers(){
        var path = "/Users";
        var thing = "";
        var oh = "";
        var onValueEvent = function(result) {
           if (!result.error) {
            thing = (JSON.stringify(result.value));
            var gim = JSON.parse(thing);
         
            console.log(Object.keys(gim).toString());
            oh += Object.keys(gim).toString();
        }
        };
        console.log(oh);
        
        firebase.query(
          onValueEvent,
          path,
          {
            singleEvent: true,
            orderBy: {
              type: firebase.QueryOrderByType.KEY
            }
          }
        )
        // return JSON.parse(thing);
    }

}