import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
import { CalculationComponent } from './calculation/calculation.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { HomeComponent } from './home/home.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { OpenAccountComponent } from './open-account/open-account.component';
import { ProfileComponent } from './profile/profile.component';
import { ShowTransactionComponent } from './show-transaction/show-transaction.component';

const routes: Routes = [{path:"account",component:OpenAccountComponent},
{path:"profile",component:ProfileComponent}
,{path:"home",component:HomeComponent},
{path:"cal",component:CalculationComponent},
{path:"loan/:amt/:month/:loanType",component:ApplyLoanComponent},
{path:"login",component:LoginComponent},
{path:"logout",component:LogoutComponent},
{path:"admin",component:HomeAdminComponent},
{path:"tran",component:ShowTransactionComponent},

{path:"cald/:amt/:month/:inst/:loanType",component:LoanDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
