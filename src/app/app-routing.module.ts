import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'authentic',
    loadChildren:()=>import('./authentic/authentic.module').then(m => m.AuthenticModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
