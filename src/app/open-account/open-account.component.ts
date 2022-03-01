import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../models/user';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-open-account',
  templateUrl: './open-account.component.html',
  styleUrls: ['./open-account.component.css']
})
export class OpenAccountComponent implements OnInit {

  constructor( private Ser:RegisterService) { }
  msg:string="";
  userName: any; 
  users:User[]=[];
  ;
  profileForm = new FormGroup({
    fname: new FormControl(''),
    mname: new FormControl(''),
    lname :new FormControl(''),
    pan: new FormControl(''),
    adhar: new FormControl(''),
    email :new FormControl(''),
    phone :new FormControl(''),
    password :new FormControl('')
  });

  ngOnInit() { 
    
    this.Ser.getUser().subscribe(
      (      data: any)=>
      {
        this.users=data;
        console.log("in dept-list  " +this.users[2].lname )
      }  ) 
    
  } 
  onClickSubmit() {
   
    console.log(this.profileForm.value)

    this.Ser.addUser(this.profileForm.value).subscribe(data => {
      this.msg="Account is Created";
      console.log("account request send");
    });
    }
}
