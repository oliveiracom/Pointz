import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiftsComponent } from './components/gifts/gifts.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '**', component: GiftsComponent },
      {
        path: 'signin',
        component: SignupComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
