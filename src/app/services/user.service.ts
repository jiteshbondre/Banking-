import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 baseUrl:string="http://localhost:3000/";
  constructor( private httpSer:HttpClient) { 

  }
  getUsers() :any
  {  console.log(this.httpSer.get<User[]>(this.baseUrl+"user"))
    return this.httpSer.get<User[]>(this.baseUrl+"user");

  }

  getUserById(user:User) :any
  { 
    return this.httpSer.get<User>(this.baseUrl+"/user")

  }
}
