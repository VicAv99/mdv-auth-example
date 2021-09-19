import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthFacade } from '@cs/core-state';
import { validationMessages } from '@cs/shared/pipes';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  isPasswordField = true;
  messages = validationMessages;

  get passwordIcon(): string {
    return this.isPasswordField ? 'visibility_off' : 'visibility';
  }

  get passwordFieldType(): string {
    return this.isPasswordField ? 'password' : 'text';
  }

  constructor(private formBuild: FormBuilder, private authFacade: AuthFacade) {}

  ngOnInit(): void {
    this.initForm();
  }

  loginAttempt() {
    if (!this.form.valid) return;
    this.authFacade.loginRequest(this.form.value);
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
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/g
          ),
        ],
      ],
    });
  }
}
