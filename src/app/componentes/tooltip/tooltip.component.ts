import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [     
    ReactiveFormsModule,
    RouterOutlet,
    RouterModule, 

    CommonModule,    
    FormsModule,   
],
  template: `
    <div class="relative inline-block" (mouseenter)="show = true" (mouseleave)="show = false">
      <ng-content></ng-content>
      <div *ngIf="show" class="absolute z-10 p-2 text-sm text-white bg-gray-800 rounded-md">
        {{ text }}
      </div>
    </div>
  `,
  styles: []
})
export class TooltipComponent {
  @Input() text: string = ''; 
  show: boolean = false; 
}