import { Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  loadingFeature = 'recipe';

  onNavigate(feature:string){
    this.loadingFeature = feature;
  }

}
