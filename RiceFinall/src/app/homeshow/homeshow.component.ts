import { Component, OnInit } from '@angular/core';
import { RiceService} from '../services/rice.service';
import {AlertService} from '../services/alert.service';

declare const $: any;
@Component({
  selector: 'app-homeshow',
  templateUrl: './homeshow.component.html',
  styleUrls: ['./homeshow.component.css']
})
export class HomeshowComponent implements OnInit {

  rice = [];
  errMsg:string;
  

  constructor(private riceSV:RiceService,
    private a1:AlertService) { }

  ngOnInit() {
    this.fechrice();
    setTimeout(function () {
      $('#table').DataTable({
        language: {
          url: '//cdn.datatables.net/plug-ins/1.10.19/i18n/Thai.json'
        }
      });
    }, 1000);
  }
  fechrice(){
  this.riceSV.getRice()
  .subscribe(
  data => {this.rice = data;
  });
  }
  
  deleteRice(riceId) {

    console.log(riceId)
      this.riceSV
        .deleteRice(riceId)
        .then(res => {
        
          this.fechrice();
        })
        .catch(err => this.errMsg = err);
    
  }
}