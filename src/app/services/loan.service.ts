import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Loan } from '../models/loan';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  baseUrl:string="http://localhost:8087/loan";
  users:User;
  constructor(private  httpSer:HttpClient) { }

  public addLoanDetails(loan:Loan , acctNo:number) :Observable<any>
{
  loan.accountNo=acctNo
 // console.log(this.httpSer.post(this.baseUrl+"/applyLoan",loan));
  return this.httpSer.post<Loan>("http://localhost:8087/loan/",loan);
  
}

public addLoanList( acctNo:number) :Observable<any>
{
 
 // console.log(this.httpSer.post(this.baseUrl+"/applyLoan",loan));
  return this.httpSer.get<Loan[]>("http://localhost:8087/loan/"+acctNo);
  
}



}
