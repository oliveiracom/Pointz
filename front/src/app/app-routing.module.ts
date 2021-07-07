import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './components/address/address.component';
import { AuthGuard } from './components/auth/auth.guard';
import { BalanceComponent } from './components/balance/balance.component';
import { GiftsComponent } from './components/gifts/gifts.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OrdersComponent } from './components/orders/orders.component';
import { SignupComponent } from './components/signup/signup.component';
import { StatementComponent } from './components/statement/statement.component';

const routes: Routes = [
  {
    path: 'signin',
    component: SignupComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'address',
    component: AddressComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'orders',
    component: OrdersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'balance',
    component: BalanceComponent,    
    canActivate: [AuthGuard],
  },
  {
    path: 'statement',
    component: StatementComponent,    
    canActivate: [AuthGuard],
  },
  {
    path: 'gifts',
    component: GiftsComponent,
    canActivate: [AuthGuard],
  },
  { path: '', component: HomeComponent },  
  { path: '**', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
