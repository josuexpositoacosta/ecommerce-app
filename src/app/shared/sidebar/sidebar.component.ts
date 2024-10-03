import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';

import { SidebarService, UserService } from '../../servicios/services';
import { User } from '../../servicios/auth/user';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [      
    RouterOutlet,
    RouterModule,
    FormsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './sidebar.component.html',
  styles: [
  ] 
})
export class SidebarComponent implements OnInit {

  usuario!: User;

  constructor( 
    public _sidebar : SidebarService,
   // public userService: UserService
    ) { }

  ngOnInit(): void {
    //this.userService.usuario;
  }

  

}
