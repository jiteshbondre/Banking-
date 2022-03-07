import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.css']
})
export class CalculationComponent implements OnInit {
  userName: any;
  formdata!: FormGroup;
  amt:number=0;
  month:number=0;
  inst:number=0;
  username:string=""
  login:boolean=true;
  showButton:boolean=false;
  profileForm = new FormGroup({
    amt: new FormControl(''),
    months: new FormControl(''),
    loanType :new FormControl('')
  });
  interest: number;
  intpm: number;
  rate: number;
  constructor(private route:Router) {
    if(sessionStorage.getItem("userName")!=null)
    {
     this.login=true
     this.username=sessionStorage.getItem("userName");
    }else{
     this.login=false
    }
   }

  ngOnInit() { 
 } 
onClickSubmit() {
  console.log(this.profileForm.value)
  this.route.navigate(['cald',this.profileForm.value.amt,this.profileForm.value.months,this.inst,this.profileForm.value.loanType]);
}
calculateinstallment(){
 if(this.profileForm.value.loanType=="house")
 {
  this.interest= 7
 }else if(this.profileForm.value.loanType=="car")
 {
   this.interest=9
 }else if(this.profileForm.value.loanType=="personal")
 {
   this.interest=15
 }else 
 {
   this.interest=12
 }
 this.intpm = this.interest/12;
 this.rate = Math.pow((1+this.intpm/100),this.profileForm.value.months); 
 console.log(this.rate);
 this.inst = this.profileForm.value.amt * (this.intpm/100) * (this.rate/(this.rate-1));

 console.log("inst: "+ this.inst);
 this.showButton=true;
}

}


