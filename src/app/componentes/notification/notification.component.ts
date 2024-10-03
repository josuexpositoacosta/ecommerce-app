import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../servicios/inter/notification/notification.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-notification',
  standalone: true,
  imports:[
    CommonModule,
    
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  message: string | null = null;

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationService.error$.subscribe(message => {
      this.message = message;
      setTimeout(() => this.message = null, 5000); // 
    });
  }
}