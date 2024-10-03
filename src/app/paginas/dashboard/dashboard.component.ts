import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
 

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports:[
    CommonModule,    
    FormsModule,     
  ],
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {
   
    
  constructor(   
    

    ) { 
          
      }     
 
  
      ngOnInit(): void {
   
      }
  
}
        

      
  


