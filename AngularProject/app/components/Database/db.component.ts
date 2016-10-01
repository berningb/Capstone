import {Component} from "@angular/core";
import firebase = require("nativescript-plugin-firebase");



@Component({
    selector: "db"
})
export class DBStructure {

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
    
    createUser(firstname, lastname, age, email) {
          firebase.push(
          '/users',
          {
            'first': firstname,
            'last': lastname,
            'age': age,
            'email': email
          }
      ).then(
          function (result) {
            console.log("created key: " + result.key);
          }
      );
    }
    
    createTrip() {
        
    }

}

