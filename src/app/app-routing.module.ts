import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ImageComponentComponent } from './image-component/image-component.component';
import { AnimationComponent } from './animation/animation.component';



const routes : Routes = [
 { path: 'imagePage', component: ImageComponentComponent},
 { path: 'animation', component: AnimationComponent},
 { path: 'animation', redirectTo: '/animation', pathMatch: 'full'}

]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
