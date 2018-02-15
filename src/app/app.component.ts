import { Component, ViewEncapsulation,OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  loadingFeature = 'recipe';

  onNavigate(feature:string){
    this.loadingFeature = feature;
  }

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyD2G0Yt5-CJRgPY7Ub44NXsGSdQWOy-JA0",
      authDomain: "ng-recipe-book-8ceba.firebaseapp.com"
    })
  }

}
