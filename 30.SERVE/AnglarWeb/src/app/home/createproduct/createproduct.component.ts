import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';
import {ProductService}  from'../../service/product.service';


@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})

export class CreateProductComponent implements OnInit {
errorMsg:string;
form:FormGroup;
  constructor(private builder:FormBuilder,
    private router:Router,
    private productSV:ProductService,
    private activatedRouter:ActivatedRoute) {this.initailCreateFormData()}
      
  ngOnInit() {
  }
private initailCreateFormData(){
this.form = this.builder.group({
  PERSION_NUMBER:['',Validators.required],
  INITIAL_CODE:['',Validators.required],
  NAME:['',Validators.required],
  LASTNAME:['',Validators.required],
  GENDER:['',Validators.required],
  AGE:['',Validators.required]
});


}

onSubmit(){
  const patt = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/i;
if (this.form.invalid) {
  console.log('ข้อมูลไม่ครบ');
}

console.log(JSON.stringify(this.form.value));
this.productSV
.createProduct(JSON.stringify(this.form.value))
.then(res=>{


  this.router.navigate(['/','home']);
})
.catch(err => this.errorMsg= err);


}
}
