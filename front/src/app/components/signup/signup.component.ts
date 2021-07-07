import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'user-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  loginForm = this.formBuilder.group({
    name: '',
    email: '',
    password: '',
  });

  constructor(private formBuilder: FormBuilder, login: LoginService) {}

  ngOnInit(): void {
    console.log('init signup comp');
  }

  onComplete() {
    //form ok
    console.log('cadastra new user', this.loginForm.value);
    /* const body = {
      name,
      email,
      password,
      balance,
    }
    this.login.addNewUser(); */

    this.loginForm.reset();
  }
}
