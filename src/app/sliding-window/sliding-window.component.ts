import { Component, OnInit , Input} from '@angular/core';
import { ElementRef } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-sliding-window',
  templateUrl: './sliding-window.component.html',
  styleUrls: ['./sliding-window.component.css']
})
export class SlidingWindowComponent implements OnInit {


  
 hidePass : boolean = false;

  ngOnInit() { 
    this.hidePass = false
  }

  constructor() { }


  hideDivButton() {
   return this.hidePass = !this.hidePass

  } 

}

