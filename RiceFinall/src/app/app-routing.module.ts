import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes}from '@angular/router';
import {HomeshowComponent } from './homeshow/homeshow.component';
import { CrateRiceComponent } from './homeshow/crate-rice/crate-rice.component';
import { EditRiceComponent } from './homeshow/edit-rice/edit-rice.component';


const routes:Routes=[
 {path:'',redirectTo:'/homeshow',pathMatch:'full'},
 {path:'homeshow',component:HomeshowComponent},
 {path:'crate-rice',component:CrateRiceComponent},
 {path:'home/edit/:id',component:EditRiceComponent}
 
 ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
