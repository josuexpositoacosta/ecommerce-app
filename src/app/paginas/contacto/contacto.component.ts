import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
selector: 'app-contacto',
standalone: true,
imports: [    
  CommonModule,
  FormsModule,
  ReactiveFormsModule
],
templateUrl: './contacto.component.html',
})
export class ContactoComponent {
contactForm: FormGroup;

constructor(private fb: FormBuilder) {
this.contactForm = this.fb.group({
name: ['', Validators.required],
email: ['', [Validators.required, Validators.email]],
message: ['', Validators.required],
});
}

onSubmit() {
if (this.contactForm.valid) {
console.log(this.contactForm.value);
}
}
}