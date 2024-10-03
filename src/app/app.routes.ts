import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { ListaProductosComponent } from './paginas/lista-productos/lista-productos.component';
import { UsuariosComponent } from './paginas/usuarios/usuarios.component';
import { BusquedaComponent } from './paginas/busqueda/busqueda.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { LoginComponent } from './auth/login/login.component';
import { VistaProductosComponent } from './paginas/vista-productos/vista-productos.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'detallesproductos', component: ListaProductosComponent },
    { path: 'vistaproductos', component: VistaProductosComponent },
    
     { path: 'usuarios', component: UsuariosComponent },
     { path: 'busqueda', component: BusquedaComponent },
     { path: 'contacto', component: ContactoComponent },
     { path: 'login', component:  LoginComponent },

];

export const APP_ROUTES = RouterModule.forRoot(routes, {useHash:true});
