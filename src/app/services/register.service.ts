import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseUrl:string="http://localhost:3000/products";

  constructor(private  httpSer:HttpClient) {

   }
ngOnInit()
{
  //this.getProduct();
}
  
public addUser() : any
{
  console.log(this.httpSer.get<User[]>(this.baseUrl));
  return this.httpSer.get<User[]>(this.baseUrl);
}
}


