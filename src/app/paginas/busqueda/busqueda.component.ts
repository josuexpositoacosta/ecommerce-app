import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [    
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.scss'
})
export class BusquedaComponent {
  formularioBusqueda!: FormGroup;

  constructor(private fb: FormBuilder) {
      this.formularioBusqueda = this.fb.group({
          busqueda: ['', [Validators.required, Validators.minLength(3)]],
      });
  }

  buscar() {
      if (this.formularioBusqueda.valid) {
          console.log('Buscar:', this.formularioBusqueda.value.busqueda);
      }
  }
}
