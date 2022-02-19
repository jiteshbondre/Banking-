import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { user } from './models/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loginForm: any;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  users: user[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userSev: UserService
  ) {}

  onSubmit() {
    console.log(this.loginForm.controls.email.value);
    this.userSev.getUsers().subscribe((response: user[]) => {
      console.log('getting response  ');
      this.users = response;
      console.log(this.users);
    });
    console.log(this.users[0].userName);
    this.submitted = true;
    if (this.loginForm.invalid) {
      console.log('invalid form');
      return;
    }
    for (var u in this.users) {
      console.log(this.users[u].userName);
      if (this.loginForm.controls.email.value == this.users[u].userName) {
        localStorage.setItem('username', this.loginForm.controls.email.value);
        this.router.navigate(['client-user']);
      } else {
        this.invalidLogin = true;
      }
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
