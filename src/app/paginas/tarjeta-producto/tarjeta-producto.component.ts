import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PipesModule } from "../../pipes/pipes.module";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tarjeta-producto',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule
  ],
  templateUrl: './tarjeta-producto.component.html',
  styleUrl: './tarjeta-producto.component.scss'
})
export class TarjetaProductoComponent {
  @Input() producto!: any;
  @Output() agregar = new EventEmitter<void>();

  onAgregar() {
      this.agregar.emit();
  }
}
