import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickLogger]',
  standalone: true 
})
export class ClickLoggerDirective {

  constructor() { }

  @HostListener('click', ['$event'])
  handleClick(event: MouseEvent) {
    console.log('Elemento clicado:', event);
    
  }
}