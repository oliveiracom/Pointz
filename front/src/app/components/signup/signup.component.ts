import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'user-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  submitted = false;

  loginForm = this.formBuilder.group({
    name: '',
    email: '',
    password: '',
  });

  emailValidator = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(
    protected formBuilder: FormBuilder,
    protected login: LoginService
    ) {}

  ngOnInit(): void {
    console.log('init signup comp');
  }

  onComplete() {
    this.login.addNewUser(this.loginForm.value).subscribe((res) => {
      this.submitted = true;
    }); 

    //this.loginForm.reset();
  }
}
