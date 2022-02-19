import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeClientComponent } from './home-client/home-client.component';

const routes: Routes = [
  {path:"client-user", component:HomeClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
