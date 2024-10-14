import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "";

  registerForm;

  constructor(public fb: FormBuilder) {
    this.registerForm = this.fb.group({
        firstName: ['', [Validators.required]],
        lastName: [''],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.pattern("^\\d{10}$")]],
    })
  }

  get form() {
    return this.registerForm.controls;
  }


  onSubmit() {
    let user = this.registerForm.value;
    console.log(user);
  }


}



