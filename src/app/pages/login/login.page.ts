import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {
 email!: FormControl;
 password!: FormControl;
 loginForm!: FormGroup;
  constructor(private readonly router: Router) {
    this.initForm();
  }

  ngOnInit() {
  }

  public async onLogin(){
    console.log(this.loginForm.value);

  }

  private initForm(){
    this.email = new FormControl('', [Validators.email, Validators.required]);
    this.password = new FormControl('', [Validators.required]);


    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password,
    })
  }

}
