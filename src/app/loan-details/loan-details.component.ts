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
   console.log(this.login)
     console.log(this.route.snapshot.params['amt'])
     //console.log(this.route.snapshot.params[2])

     this.total=Number(this.route.snapshot.params['month'])*Number(this.route.snapshot.params['inst'])+200
  }
}
