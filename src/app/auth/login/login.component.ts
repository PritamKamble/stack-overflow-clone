import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthConstants } from 'src/app/constants/auth.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router
  ) {
    this.loginForm = this.buildLoginForm();
  }

  ngOnInit(): void { }

  private buildLoginForm(): FormGroup {
    return this.fb.group({
      email: [null, [Validators.required, Validators.pattern(AuthConstants.emailPattern)]],
      password: [null, [Validators.required]],
    });
  }

  get email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  public login(): void {
    if (this.loginForm.valid) {
      this.router.navigate(['/dashboard']);
    }
  }

}
