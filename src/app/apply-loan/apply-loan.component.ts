import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-apply-loan',
  templateUrl: './apply-loan.component.html',
  styleUrls: ['./apply-loan.component.css']
})
export class ApplyLoanComponent implements OnInit {

 
  constructor() { }
  msg:string=null;
  userName: any; 
  login:boolean=false;
  ;
  profileForm = new FormGroup({
    lname: new FormControl(''),
    fname: new FormControl(''),
    installment :new FormControl('')
  });

  ngOnInit() { 
    if(sessionStorage.getItem("userName")!=null)
    {
     this.login=true
    }else{
     this.login=false
    }
    
  } 
  onClickSubmit() {
    this.msg="Loan Request send for approval"
    console.log(this.profileForm)
    }
}

