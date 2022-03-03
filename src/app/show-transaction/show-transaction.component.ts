import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Transaction } from '../models/Transactions';
import { User } from '../models/user';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-show-transaction',
  templateUrl: './show-transaction.component.html',
  styleUrls: ['./show-transaction.component.css']
})
export class ShowTransactionComponent implements OnInit {

  login:boolean=false;
  user:User= new User();
  
  transaction:Transaction[];
  constructor(private route: ActivatedRoute,private Ser:TransactionService) {}
  ngOnInit(): void {
    console.log(this.user.accountNo);

    if(sessionStorage.getItem("userName")!=null)
    {
     this.login=true
     this.user.accountNo=358766
     
    }else{
     this.login=false
     this.user.accountNo=358766
    }

    this.Ser.getTransaction(this.user).subscribe(
      (      data: any)=>
      {
        this.transaction=data;
        console.log("in Transaction-list  " +this.transaction[0].amount)
      }  ) 


  }

}
