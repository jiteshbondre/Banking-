import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 baseUrl:string="http://localhost:3000/";
  constructor( private httpSer:HttpClient) { 

  }
  getUsers() :any
  {  console.log(this.httpSer.get<user[]>(this.baseUrl+"user"))
    return this.httpSer.get<user[]>(this.baseUrl+"user");

  }

  getUserById(user:user) :any
  { 
    return this.httpSer.get<user>(this.baseUrl+"/user")

  }
}
