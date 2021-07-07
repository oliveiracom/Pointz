import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedComponent } from './shared/shared.component';
import { HeaderCommonComponent } from './shared/header-common/header-common.component';
import { FooterCommonComponent } from './shared/footer-common/footer-common.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddressComponent } from './components/address/address.component';
import { BalanceComponent } from './components/balance/balance.component';
import { StatementComponent } from './components/statement/statement.component';
import { GiftsComponent } from './components/gifts/gifts.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginService } from './services/login.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from './components/components.module';
import { ServicesModule } from './services/services.module';
@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    HeaderCommonComponent,
    FooterCommonComponent,
    LoginComponent,
    SignupComponent,
    AddressComponent,
    BalanceComponent,
    StatementComponent,
    GiftsComponent,
    OrdersComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ComponentsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [ServicesModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
