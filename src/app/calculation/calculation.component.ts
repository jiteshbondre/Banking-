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
  profileForm = new FormGroup({
    amt: new FormControl(''),
    months: new FormControl(''),
    installment :new FormControl('')
  });
  constructor(private route:Router) { }

  ngOnInit() { 
 } 
 onClickSubmit() {
   console.log(this.profileForm.value)
   this.route.navigate(['cald',this.profileForm.value.amt,this.profileForm.value.months,this.profileForm.value.installment]);
 }
}


