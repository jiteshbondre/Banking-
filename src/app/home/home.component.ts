import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username:string=""
  login:boolean=true;
  constructor(private route:Router) { if(sessionStorage.getItem("userName")!=null)
  {
   this.login=true
   this.username=sessionStorage.getItem("userName");
  }else{
   this.login=false
  } }

  ngOnInit(): void {
  }

}
