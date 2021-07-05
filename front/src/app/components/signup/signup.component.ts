import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    console.log('init signup comp');
  }

  onComplete() {
    //form ok
    this.loginForm.reset();
  }
}
