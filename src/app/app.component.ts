import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  login:boolean=true;
  
  constructor(private router:Router)
  {
    
    if(sessionStorage.getItem("userName")!=null)
    {
     this.login=true
    }else{
     this.login=false
    }

    console.log(this.login)
  }
  ngOnInit(): void {
    this.router.navigate(['/home']);
  }
  }


