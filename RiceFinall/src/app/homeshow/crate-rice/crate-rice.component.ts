import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormsModule,FormControl,Validators } from '@angular/forms';
import {Router,ActivatedRoute}from '@angular/router';
import{RiceService} from 'src/app/services/rice.service';


@Component({
  selector: 'app-crate-rice',
  templateUrl: './crate-rice.component.html',
  styleUrls: ['./crate-rice.component.css']
})
export class CrateRiceComponent implements OnInit {

  form: FormGroup;
  errorMsg:string
  constructor(
    private builder: FormBuilder,
    private router: Router,
    private riceSV: RiceService,
    private activatedRouter: ActivatedRoute
    ) { this.initialCrateFormData(); }

  ngOnInit() {
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
      this.riceSV
        .createRice(this.form.value)
        .then(res => {
          this.router.navigate(['/', 'homeshow']);
        })
        .catch(err => this.errorMsg = err);   
    }
  }
