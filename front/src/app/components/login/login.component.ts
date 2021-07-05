import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group({
    email: 'email@mail.com',
    password: 'pass',
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    console.log('init login comp');
  }

  onComplete() {
    //form ok
    this.loginForm.reset();
  }
}
