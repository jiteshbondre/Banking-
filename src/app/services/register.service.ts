import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { Loan } from '../models/loan';
import { login } from '../models/login';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  user:User= new User();

  baseUrl:string="http://localhost:8088/";

  constructor(private  httpSer:HttpClient) {

   }
ngOnInit()
{
  //this.getProduct();
}
  
public addUser(user:User) : Observable<any>
{
  console.log(this.httpSer.post(this.baseUrl+"reg", user));
  return this.httpSer.post<User>("http://localhost:8087/Reg", user);
  
}
public loginUser(user:login) : any
{ 
  //console.log(this.httpSer.post(this.baseUrl));
  //this.httpSer.request<User>  ('GET',this.baseUrl+"get", {responseType:'json'});
  return this.httpSer.post<User>("http://localhost:8087/login",user);;
}

public getProfile(acc:number) : any
{ 
  //console.log(this.httpSer.post(this.baseUrl));
  this.user.accountNo=358766;

console.log(this.httpSer.post<User>("http://localhost:8087/login",this.user));
  return this.httpSer.post<User>("http://localhost:8087/login",this.user);
}

public getUserByID(userID:Number): any
{
  console.log("urr"+userID)
  return this.httpSer.get<User>("http://localhost:8087/"+"getProfile/"+userID);
}

public applyLoan(loan:Loan) : any
{ 
  
  
  //loan.user=this.user;

  console.log(loan);
  //this.httpSer.request<User>  ('GET',this.baseUrl+"get", {responseType:'json'});
  return this.httpSer.post<User>("http://localhost:8087/loan",loan);;
}

}


