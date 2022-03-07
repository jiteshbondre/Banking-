import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../models/Transactions';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  baseUrl:string="http://localhost:8088/";

  constructor(private  httpSer:HttpClient) {

   }
ngOnInit()
{
  //this.getProduct();
}

public getTransaction(user:User) : Observable<any>
{
  console.log(this.httpSer.post<Transaction[]>("http://localhost:8087/transaction", user));
  return this.httpSer.post<Transaction[]>("http://localhost:8087/transaction", user);
  
}

getAllTransaction() :any
{ 
  return this.httpSer.get<Transaction[]>("http://localhost:8087/allUser");

}

}