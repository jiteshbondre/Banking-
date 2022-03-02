import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OpenAccountComponent } from './open-account/open-account.component';
import { ProfileComponent } from './profile/profile.component';
import { CalculationComponent } from './calculation/calculation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OpenAccountComponent,
    ProfileComponent,
    CalculationComponent,
    LoanDetailsComponent,
    ApplyLoanComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule , 
    ReactiveFormsModule  ,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
