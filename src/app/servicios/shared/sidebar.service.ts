 import { Injectable } from '@angular/core';

import { Router } from '@angular/router';


@Injectable()
export class SidebarService {
  
   menu: any = [
    {
      titulo: 'Historia',
      icono: 'mdi mdi-gauge',
      submenu: [       
        { titulo: 'Dashboard', url: '/dashboard' },
        { titulo : 'productos', url: '/Productos' },
        { titulo : 'usuarios', url: '/Usuarios' },
        { titulo : 'Contacto', url: '/contacto' },
     
      ]
    },
    {
    titulo: 'Mantenimientos',
    icono: 'mdi mdi-folder-lock-open',
    submenu: [       
     { titulo: 'Usuarios', url: '/usuarios' }     
    ]
  }
  ];



  constructor(
    public router: Router
  ) { }

  refresh(): void { window.location.reload(); }


}
