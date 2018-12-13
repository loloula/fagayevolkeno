import { Component } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fagaye';
  constructor() {
   const config = {
     apiKey: "AIzaSyADLIaYarYD8oCj4GsDVHRtYA41JDZWF0E",
    authDomain: "fagaye-7853a.firebaseapp.com",
    databaseURL: "https://fagaye-7853a.firebaseio.com",
    projectId: "fagaye-7853a",
    storageBucket: "fagaye-7853a.appspot.com",
    messagingSenderId: "832526884208"
   };
   firebase.initializeApp(config);
 }
}
