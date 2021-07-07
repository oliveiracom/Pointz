import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group({
    email: '',
    password: '',
  });

  emailValidator = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(
    private formBuilder: FormBuilder,
    protected login: LoginService,
    protected router: Router) {}

  ngOnInit(): void {
  }

  onComplete() {
    this.login.validateUser(this.loginForm.value).subscribe((res) => {
      if(res.code === 9901) {
        this.login.validSession(true);
        this.router.navigate(['/gifts']);
      }
    })
    //this.loginForm.reset();
  }
}
