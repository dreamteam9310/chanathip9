import { Component, OnInit } from '@angular/core';
import {ProductService} from '../service/product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  item = [];
  errMsg ="";
  constructor(private productSV:ProductService,
              private route:Router) { }

  ngOnInit() {
    this.fetchData();
  }
  fetchData(){
    this.productSV.getProduct()
    .subscribe(
      data => this.item = data,
      error => this.errMsg = error
      );
  }
  gotoCreateProduct(){
    this.route.navigate(['/','createproduct']);
  }
  gotoDeleteData(){
    this.route.navigate(['/','deletedata']);
  }

  
  
}

