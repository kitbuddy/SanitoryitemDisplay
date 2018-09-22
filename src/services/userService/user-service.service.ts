import { Injectable } from '@angular/core';
import { Http, Headers, HttpModule } from '@angular/http'
import { UserModel } from '../../model/UserModel';



@Injectable()
export class UserService {
  http: Http;
  data: UserModel
  
  constructor(){

  }
  getUserData(): UserModel {


    this.http.get('http://localhost:8080/demo/all');

    console.log('******************')
    console.log(this.data)
    console.log('******************')

    return this.data
  }



}
