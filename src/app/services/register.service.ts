import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { login } from '../models/login';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

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
  //this.httpSer.request<User>  ('GET',this.baseUrl+"get", {responseType:'json'});
  return this.httpSer.post<User>("http://localhost:8087/login",acc);;
}

public getUserByID(userID:Number): any
{
  return this.httpSer.get<User>(this.baseUrl+"get/"+{userID});
}
}


