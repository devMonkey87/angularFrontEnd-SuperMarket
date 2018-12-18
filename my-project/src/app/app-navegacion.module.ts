import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { DetallesProductosComponent } from './detalles-productos/detalles-productos.component';
import { DetallesClientesComponent } from './detalles-clientes/detalles-clientes.component';
import { ListaComponent } from './lista/lista.component';
import { UserLoginComponent } from './user-login/user-login.component';




const routes: Routes = [
  { path: 'detallesproduct/:referencia', component: DetallesProductosComponent },
  { path: 'lista', component: ListaComponent },
  { path: 'detallesCliente', component: DetallesClientesComponent },
  { path: 'login', component: UserLoginComponent },
  { path: '', redirectTo: 'AppComponent ', pathMatch: 'full' },

];


@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})



export class AppNavegacionModule { }



