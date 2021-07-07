import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from './components/components.module';
import { ServicesModule } from './services/services.module';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HeaderCommonComponent } from './shared/header-common/header-common.component';
import { FooterCommonComponent } from './shared/footer-common/footer-common.component';
import { SharedModule } from './shared/shared.module'
@NgModule({
  declarations: [
    AppComponent,
    HeaderCommonComponent,
    FooterCommonComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ComponentsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ServicesModule
  ],
  providers: [ServicesModule],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
