import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-apply-loan',
  templateUrl: './apply-loan.component.html',
  styleUrls: ['./apply-loan.component.css']
})
export class ApplyLoanComponent implements OnInit {

 
  constructor() { }
  msg:string="";
  userName: any; 
  ;
  profileForm = new FormGroup({
    lname: new FormControl(''),
    fname: new FormControl(''),
    installment :new FormControl('')
  });

  ngOnInit() { 
    
  } 
  onClickSubmit() {
    this.msg="Account Request send for approval"
    console.log(this.profileForm)
    }
}

