import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import {AlertService} from '../services/alert.service';



@Injectable({
  providedIn: 'root'
})
export class RiceService {
  Url="https://localhost:44323/api/TableRices";

  constructor(private http:HttpClient,
              private alert:AlertService) { }
  getRice(){
    return this.http.get<Product[]>(this.Url);
  }
  getonerice(riceId){
    return this.http.get<Product>(this.Url +'/'+ riceId);
  }
  
  createRice(data){
    let promise = new Promise((resolve, reject) => {
      this.http.post(this.Url, data)
        .toPromise()
        .then(
          res => {
            console.log(res);
            this.alert.notify('เพิ่มข้อมูลเรียบร้อยแล้ว','info')
            resolve(data);
          }
        );
    });
    return promise;
  }


  deleteRice(data:any) {
 
    let promise = new Promise((resolve, reject) => {
      let api = this.Url+'/'+data;
      this.http.delete(api)
        .toPromise()
        .then(
          res => {
            console.log(res);
            this.alert.notify('ลบเรียบร้อยแล้ว','info')
            resolve(data);
          }
        );
    });
    console.log(data);
    return promise;
  }

  edit(riceId:any,data) {
 
    let promise = new Promise((resolve, reject) => {
      let api = this.Url+'/'+riceId;
      this.http.put(api,data)
        .toPromise()
        .then(
          res => {
            console.log(res);
            this.alert.notify('แก้ไขเรียบร้อยแล้ว','info')
            resolve(data);
          }
        );
    });
    console.log(data);
    return promise;
  }
  
}