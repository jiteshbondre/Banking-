import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Loan } from '../models/loan';
import { Transaction } from '../models/Transactions';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private  httpSer:HttpClient) { }

  getAllLoan() :any
{ 
  return this.httpSer.get<Loan[]>("http://localhost:8087/allLoan");

}
getAllTransaction() :any
{ 
  return this.httpSer.get<Transaction[]>("http://localhost:8087/allTransactions");

  
}

getAllUser() :any
{ 
  return this.httpSer.get<User[]>("http://localhost:8087/allUser");

}

}
