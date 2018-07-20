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
import { HttpClient } from '@angular/common/http/src/client';
import { BannerMessageComponent } from './banner-message/banner-message.component';
import { AngularDefaultComponent } from './angular-default/angular-default.component';



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
    AngularDefaultComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ImageComponentComponent, ProvideTestJsonService],
  bootstrap: [AppComponent]
})


export class AppModule { }
