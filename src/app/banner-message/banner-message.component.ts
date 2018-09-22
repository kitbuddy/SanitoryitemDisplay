import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-message',
  templateUrl: './banner-message.component.html',
  styleUrls: ['./banner-message.component.css']
})
export class BannerMessageComponent implements OnInit {

  bannerValue : boolean = true
  constructor() { }

  ngOnInit() {
  }

 closeBanner() {
    this.bannerValue = false
  }

  bannerActive = () => {
    this.bannerValue = true
  }
 
  helloWorld = () => {
    return 'Hello world!';
  }


}
