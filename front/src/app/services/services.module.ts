import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { LoginService } from './login.service';

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  providers: [LoginService,],
})
export class ServicesModule {}
