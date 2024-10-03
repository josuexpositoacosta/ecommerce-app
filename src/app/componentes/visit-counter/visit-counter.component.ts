import { Component, OnInit } from '@angular/core';
import { signal } from '@angular/core';


@Component({
  selector: 'app-visit-counter',
  standalone: true,
  imports: [],
  templateUrl: './visit-counter.component.html',
  styleUrl: './visit-counter.component.scss'
})
export class VisitCounterComponent implements OnInit {
  
  visitCount = signal(0);

  constructor() {}

  ngOnInit(): void {
    
    this.incrementVisitCount();
  }

  incrementVisitCount() {
    this.visitCount.update(value => value + 1);
  }
}
