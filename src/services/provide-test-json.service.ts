import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http/src/static_response';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProvideTestJsonService {

  private configUrl = "https://jsonplaceholder.typicode.com/posts/1";
  constructor(private httpclient : HttpClient) { 


  }


  public returnTestData () {
    return this.httpclient.get(this.configUrl)
  }

 }
