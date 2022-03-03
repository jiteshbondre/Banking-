import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-apply-loan',
  templateUrl: './apply-loan.component.html',
  styleUrls: ['./apply-loan.component.css']
})
export class ApplyLoanComponent implements OnInit {

 
  constructor(private Ser:RegisterService) { }
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
    
    // this.Ser.getProfile(this.loginForm.value).subscribe(
    //   (      data: any)=>
    //   {
    //     this.users=data;
    //     console.log("in dept-list  " +this.users.firstName )
    //   }  ) 

  } 
  onClickSubmit() {
    this.msg="Loan Request send for approval"
    console.log(this.profileForm)
    }
}

