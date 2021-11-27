import { Component } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {

  user = {
    roles_id: 2,
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    phone: '',
  }

  miFormulario: FormGroup = this.fb.group({

    name: ['', [Validators.required]],
    adress: ['', [Validators.required]],
    phone: ['', [Validators.required, Validators.maxLength(9)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]

  });

  constructor(private fb: FormBuilder) { }
  
  register() {
  };

}