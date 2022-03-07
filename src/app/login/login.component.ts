import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginflag:boolean;
  username:string=""
  login:boolean=true;
  constructor( private Ser:RegisterService,private route:Router) {
    if(sessionStorage.getItem("userName")!=null)
    {
     this.login=true
     this.username=sessionStorage.getItem("userName");
    }else{
     this.login=false
    }
   }
  msg:string="";
  userName: any; 
  users:User;
  ;
  loginForm = new FormGroup({
    accountNo: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit() { 
    
  
    
  } 
  onClickSubmit() {
   
    console.log(this.loginForm.value)

    this.Ser.loginUser(this.loginForm.value).subscribe(
      (      data: any)=>
      {
        this.users=data;
        console.log("in dept-list  " +this.users.firstName )
      }  ) 

      if(this.users.firstName==null)
      {
        this.loginflag=true;
      }
      else{
        sessionStorage.setItem("userName",this.users.firstName);
       sessionStorage.setItem("accNo",this.users.accountNo.toString());

        this.loginflag=false;
        this.route.navigate(['home']);

      }
      console.log("this.loginflag=  " +this.loginflag )

    }
}
