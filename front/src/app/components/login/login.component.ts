import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
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
    protected login: LoginService) {}

  ngOnInit(): void {
  }

  onComplete() {
    this.login.validateUser(this.loginForm.value).subscribe((res) => {
      console.log(res);
    })
    //this.loginForm.reset();
  }
}
