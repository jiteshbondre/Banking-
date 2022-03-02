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
  users:User;
  ;
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address :new FormControl(''),
    mailId: new FormControl(''),
    aadharNo: new FormControl(''),
    panNo :new FormControl(''),
    phone :new FormControl(''),
    password :new FormControl(''),
    approvalStatus: new FormControl(''),
    balance :new FormControl(''),
    branchId :new FormControl('')
  });

  ngOnInit() { 
    
   
    
  } 
  onClickSubmit() {
   
    console.log(this.profileForm.value)

    this.Ser.addUser(this.profileForm.value).subscribe(data => {
      this.msg="Account is Created";
      console.log(data);
    });
    }
}
