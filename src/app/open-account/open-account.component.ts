import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegisterService } from '../Services/register.service';

@Component({
  selector: 'app-open-account',
  templateUrl: './open-account.component.html',
  styleUrls: ['./open-account.component.css']
})
export class OpenAccountComponent implements OnInit {

  constructor( private Ser:RegisterService) { }
  msg:string="";
  userName: any; 
  ;
  profileForm = new FormGroup({
    fame: new FormControl(''),
    mname: new FormControl(''),
    lname :new FormControl(''),
    pan: new FormControl(''),
    adhar: new FormControl(''),
    email :new FormControl(''),
    phone :new FormControl('')
  });

  ngOnInit() { 
    
  } 
  onClickSubmit() {
    this.msg="Account Request send for approval"
    console.log(this.profileForm)
    this.Ser.addUser(this.profileForm.value)
    }
}
