import { Component, OnInit } from '@angular/core';
import { ImageComponentComponent } from '../app/image-component/image-component.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 

  constructor( testvalues : ImageComponentComponent
  ) {
    
  }

  ngOnInit() {
   
  }

}
