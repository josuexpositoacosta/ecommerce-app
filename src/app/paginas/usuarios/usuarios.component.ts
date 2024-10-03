import { Component, OnDestroy, OnInit } from '@angular/core';

import { PersonalDetailsComponent } from '../../componentes/personal-details/personal-details.component';
import { NavComponent } from '../../shared/nav/nav.component';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../servicios/service.index';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports:[
    CommonModule,
    
    FormsModule,
    
    NavComponent,
    PersonalDetailsComponent
  ],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  userLoginOn:boolean=false;
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe({
      next:(userLoginOn) => {
        this.userLoginOn=userLoginOn;
      } 
    });

  }

}
