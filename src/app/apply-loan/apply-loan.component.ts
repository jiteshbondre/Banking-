import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Loan } from '../models/loan';
import { User } from '../models/user';
import { LoanService } from '../services/loan.service';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-apply-loan',
  templateUrl: './apply-loan.component.html',
  styleUrls: ['./apply-loan.component.css']
})
export class ApplyLoanComponent implements OnInit {

 
  amt:any;	
  msg:string="";
  userName: any; 
  loan: Loan = new Loan ;
  user:User = new User;
  applied: boolean = false;
  accountNo : Number;
  panCardNo : string;
  AadharNo : Number;
  MailId : string;
  phoneNo : Number;
  loanType : string;
  username:string=""
  login:boolean=true;

  profileForm = new FormGroup({
    user:new FormControl(''),
    panCardNo: new FormControl(''),
    AadharNo : new FormControl(''),
    MailId: new FormControl(''),
    phoneNo: new FormControl(''),
    loan: new FormControl(''),
    ammountIssued: new FormControl(''),
    surity :new FormControl(''),
    monthlyIncome: new FormControl(''),


  });

  constructor(private formBuilder: FormBuilder, private router: Router, 						
    private loanService:LoanService,private regService:RegisterService,private route : ActivatedRoute) { 
      if(sessionStorage.getItem("userName")!=null)
      {
       this.login=true
       this.username=sessionStorage.getItem("userName");
      }else{
       this.login=false
      }
    }
 

  ngOnInit() { 
    console.log("session "+sessionStorage.getItem("accNo"));
    this.regService.getUserByID(Number(sessionStorage.getItem("accNo"))).subscribe((result: any) => 
      {
        this.user = result;
        console.log(this.user)
        
      });	

      this.accountNo = this.user.accountNo;
      this.panCardNo = this.user.panNo;
      this.AadharNo = Number(this.user.aadharNo);
      this.MailId = this.user.mailId;
      this.phoneNo = Number(this.user.phone);
      this.amt = this.route.snapshot.params['amt'];
      this.loanType = this.route.snapshot.params['loanType'];
      console.log("accno="+this.accountNo)
      console.log("panCardNo="+this.panCardNo)
      console.log("AadharNo="+this.AadharNo)

      console.log("MailId="+this.MailId)
     
      

  } 
  onClickSubmit() {
    this.msg="Loan Request send for approval";
    this.applied= true;
    console.log(this.msg);
    console.log(this.profileForm.value);
    this.profileForm.value.user=this.user.accountNo
    if(this.route.snapshot.params['loanType']=="house")
    {
      this.profileForm.value.loan=1;
    }else if(this.route.snapshot.params['loanType']=="car")
    {
      this.profileForm.value.loan=2;
    }else if(this.route.snapshot.params['loanType']=="personal")
    {
      this.profileForm.value.loan=3  ;      }
      else 
    {
      this.profileForm.value.loan=4;
    }
    this.profileForm.value.status="pending";
    this.loanService.addLoanDetails(this.profileForm.value,this.user.accountNo).subscribe(result => 
      {
        console.log(result)
      });		
      						
           

    }
  }