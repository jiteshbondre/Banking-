import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AnyForUntypedForms, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Loan } from '../models/loan';
import { Transaction } from '../models/Transactions';
import { User } from '../models/user';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {
  users: User[]=[];
  loans:Loan[]=[];
  transactions:Transaction[]=[];
  loginflag:boolean=false;
  loginflag1:boolean=false;

  username:string=""
  login:boolean=true;
  userC:number
  transactionsC:number;
  loansC:number;
  loginForm: any;
  showloan:boolean=false;
  showuser:boolean=false;
  showtran:boolean=false;


  constructor( private Ser:AdminService,private route:Router) {

    
    this.Ser.getAllUser().subscribe(data => {
      this.users=data
      
      console.log(this.users[0]);
    }); 
    this.Ser.getAllLoan().subscribe(data => {
      this.loans=data
      console.log(this.loans[0]);
    });  
    this.Ser.getAllTransaction().subscribe(data => {
      this.transactions=data
      console.log(this.transactions[0]);
    }); 

}
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      accountNo: new FormControl(''),
      password: new FormControl(''),
    });


    
    this.loansC=this.loans.length;
    this.userC=this.users.length;
    this.transactionsC=this.transactions.length;
   console.log("users="+this.users.length)
   console.log("loans="+this.loans.length)
   console.log("Transactions="+this.transactions.length)


  }

  onClickSubmit() {
   
    console.log(this.loginForm.value)


      if(this.loginForm.value.accountNo=="admin" && this.loginForm.value.password=="admin")
      {
        this.loginflag=true;

      }
      else{
        this.loginflag=false;
        this.loginflag1=true;


      }
      console.log("this.loginflag=  " +this.loginflag )

    }

    onClickloan()
    {
      this.showloan=true;
      this.showtran=false;
      this.showuser=false;
    }
    onClicktran()
    {
      this.showloan=false;
      this.showtran=true;
      this.showuser=false;
    }
    onClickuser()
    {
      this.showloan=false;
      this.showtran=false;
      this.showuser=true;
    }

  }

   
