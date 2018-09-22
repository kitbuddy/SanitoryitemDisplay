import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes} from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderNavigatorComponent } from './header-navigator/header-navigator.component';
import { ImageComponentComponent } from './image-component/image-component.component';
import { Router } from '@angular/router/src/router';
import { AppRoutingModule } from './/app-routing.module';
import { ProvideTestJsonService } from '../services/provide-test-json.service';
import { BannerMessageComponent } from './banner-message/banner-message.component';
import { AngularDefaultComponent } from './angular-default/angular-default.component';
import { SlidingWindowComponent } from './sliding-window/sliding-window.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroListBasicComponent } from './hero-list-basic/hero-list-basic.component';
import { UserService } from '../services/userService/user-service.service';
import { HttpModule } from '@angular/http';
import { AnimationComponent } from './animation/animation.component';



RouterModule.forRoot(
  [
    { path: "imageMe", component: ImageComponentComponent}
  ]
)
@NgModule({
  declarations: [
    AppComponent,
    HeaderNavigatorComponent,
    ImageComponentComponent,
    BannerMessageComponent,
    AngularDefaultComponent,
    SlidingWindowComponent,
    HeroListBasicComponent,
    AnimationComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [ImageComponentComponent, ProvideTestJsonService, UserService, RouterModule],
  bootstrap: [AppComponent]
})


export class AppModule { }
