import { Component, OnInit } from '@angular/core';
import { ImageComponentComponent } from '../app/image-component/image-component.component'
import { UserService } from '../services/userService/user-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app'
  userService: UserService

  constructor(testvalues: ImageComponentComponent, userService: UserService

  ) {
    this.userService = userService
  }


  ngOnInit() {

  }

  getUserDataSer(): any {

    this.userService.getUserData();

  }

}
