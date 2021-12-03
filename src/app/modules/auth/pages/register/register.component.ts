import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth.service';
import { User } from '../../../../core/models/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent {
  user: User = {
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    password: '',
  };

  miFormulario: FormGroup = this.fb.group({
    first_name: ['', [Validators.required, Validators.required]],
    last_name: ['', [Validators.required, Validators.required]],
    phone: ['', [Validators.required, Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
  });

  constructor(
    private fb: FormBuilder,
    private _authService: AuthService,
    private _router: Router
  ) {}
  register() {
    this._authService
      .register(this.user)
      .subscribe((res) => this._router.navigateByUrl('/'));
  }
}
