import { Component, OnInit } from '@angular/core';
import { Loan } from '../models/loan';
import { User } from '../models/user';
import { LoanService } from '../services/loan.service';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username:string=""
  login:boolean=true;
  users:User
  loanList:Loan[];
  constructor(private ser:RegisterService,private loanSer:LoanService) { 
    if(sessionStorage.getItem("userName")!=null)
    {
     this.login=true
     this.username=sessionStorage.getItem("userName");
    }else{
     this.login=false
    }
  }

  ngOnInit(): void {

    this.ser.getUserByID(Number(sessionStorage.getItem("accNo"))).subscribe(
      (      data: any)=>
      {
        this.users=data;
        console.log("in dept-list  " +this.users.firstName )
      }  ) ;

      this.loanSer.addLoanList(Number(sessionStorage.getItem("accNo"))).subscribe(
        (      data: any)=>
        {
          this.loanList=data;
          console.log("in dept-list  " +this.loanList[0] )
        }  ) ;
    }
  

  

}
