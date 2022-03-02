import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.css']
})
export class LoanDetailsComponent implements OnInit {
  total:any=0;
  amt:string="";
  months:string="";
  interest:number=0;

  installment:string="";
  login:boolean=false;

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    if(sessionStorage.getItem("userName")!=null)
    {
     this.login=true
     
    }else{
     this.login=false
    }

    if(this.route.snapshot.params['loanType']=="house")
    {
     this.interest=0.7
    }else if(this.route.snapshot.params['loanType']=="car")
    {
      this.interest=0.9
    }else if(this.route.snapshot.params['loanType']=="personal")
    {
      this.interest=1.5
    }else 
    {
      this.interest=1.1
    }
    console.log("interest rate for"+this.route.snapshot.params['loanType']+"is"+this.interest)
   console.log(this.login)
     console.log(this.route.snapshot.params['amt'])
     //console.log(this.route.snapshot.params[2])

     this.total=Number(this.route.snapshot.params['month'])*this.interest*Number(this.route.snapshot.params['inst'])+200
  }
}
