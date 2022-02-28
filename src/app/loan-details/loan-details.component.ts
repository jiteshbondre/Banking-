import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.css']
})
export class LoanDetailsComponent implements OnInit {
  amt:string="";
  months:string="";
  installment:string="";
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    // this.amt = this.route.snapshot.paramMap.get('amt')
    // this.months = this.route.snapshot.paramMap.get('months')
    // this.installment = this.route.snapshot.paramMap.get('amt')
  }
}
