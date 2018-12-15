import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RiceService } from 'src/app/services/rice.service';

@Component({
  selector: 'app-edit-rice',
  templateUrl: './edit-rice.component.html',
  styleUrls: ['./edit-rice.component.css']
})
export class EditRiceComponent implements OnInit {
ID:string;
   errMsg:string;
   form:FormGroup;
   items:any;
  constructor(private activatedRouter:ActivatedRoute,
              private builder:FormBuilder,
              private router:Router,
              private riceSV:RiceService ) {
                this.initialCrateFormData();
                this.activatedRouter.params.forEach(
                  params =>{
                    this.ID=params.id;
                    this.form.controls['riceId'].setValue(this.ID);
                  }
                );
               }

  ngOnInit() {
    this.fechrice();
  }

  fechrice(){
    this.riceSV.getonerice(this.ID)
    .subscribe(
    data => {this.items = data;
    });
    }
    
    private initialCrateFormData() {
      this.form = this.builder.group({
        riceId : new FormControl ('', Validators.required),
        riceName : new FormControl ('', Validators.required),
        ricePrice : new FormControl ('', Validators.required),
        riceNumber: new FormControl ('', Validators.required),
        categoryId: new FormControl ('', Validators.required)
      });
    }

    onSubmit() {
      console.log(this.form.value);
      if (this.form.valid){
        this.riceSV
        .edit(this.ID,this.form.value)
        .then(res =>{
          this.router.navigate(['/','homeshow']);
        })
        .catch(err => this.errMsg = err);
      }
        
    }
    
}
