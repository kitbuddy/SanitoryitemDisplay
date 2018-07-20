import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ImageComponentComponent } from './image-component/image-component.component';



const routes : Routes = [
 { path: 'imagePage', component: ImageComponentComponent}
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
