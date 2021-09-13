import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@cs/core-data';
import { tap } from 'rxjs/operators';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  isPasswordField = true;

  get passwordIcon(): string {
    return this.isPasswordField ? 'visibility_off' : 'visibility';
  }

  get passwordFieldType(): string {
    return this.isPasswordField ? 'password' : 'text';
  }

  constructor(
    private formBuild: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  loginAttempt() {
    if (!this.form.valid) return;
    this.authService
      .login(this.form.value)
      .pipe(tap(({ access_token }) => this.authService.setToken(access_token)))
      .subscribe();
  }

  private initForm() {
    this.form = this.formBuild.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12),
        ],
      ],
    });
  }
}
