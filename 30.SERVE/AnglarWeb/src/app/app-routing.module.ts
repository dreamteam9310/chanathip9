import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import{BmiComponent} from './home/bmi/bmi.component';

import{HomeComponent} from './home/home.component';
import{CreateProductComponent} from './home/createproduct/createproduct.component';
//import {UpdateproductComponent} from './home/updateproduct/updateproduct.component';

const routes:Routes=[
  { path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'createproduct',component:CreateProductComponent},
  {path:'home/edit/:id',component:CreateProductComponent},
  {path:'bmi',component:BmiComponent}

];

@NgModule({
  
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }