import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { LoginService } from './login.service';

@NgModule({
  declarations: [],
  imports: [],
  providers: [LoginService, HttpClient],
})
export class ServicesModule {}
