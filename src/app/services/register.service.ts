import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
  console.log(this.httpSer.post(this.baseUrl+"add", user));
  return this.httpSer.post("http://localhost:8088/add", user);
  
}
public getUser() : any
{ 
  //console.log(this.httpSer.post(this.baseUrl));
  return this.httpSer.get<User[]>(this.baseUrl+"get");
}

public getUserByID(userID:Number): any
{
  return this.httpSer.get<User>(this.baseUrl+"get/"+{userID});
}
}


