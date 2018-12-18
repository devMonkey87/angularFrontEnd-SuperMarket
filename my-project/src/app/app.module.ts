import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { Component, OnInit } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { PrimerServiceService } from './servicios/servicioCustomer.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ProductService } from './servicios/servicioProductos.service';

import { AppNavegacionModule } from './app-navegacion.module';
import { DetallesProductosComponent } from './detalles-productos/detalles-productos.component';
import { DetallesClientesComponent } from './detalles-clientes/detalles-clientes.component';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';
import { GalleriaModule } from 'primeng/galleria';
import {CardModule} from 'primeng/card';
import { UserLoginComponent } from './user-login/user-login.component';
import { LoginSer } from './servicios/loginSer.service';



@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    DetallesProductosComponent,
    DetallesClientesComponent,
    UserLoginComponent

  ],
  imports: [
    BrowserModule,
    AppNavegacionModule,
    HttpClientModule,
    FormsModule,
    AppNavegacionModule,
    ButtonModule,
    TableModule,
    TabMenuModule,
    GalleriaModule,
    CardModule





  ],
  providers: [PrimerServiceService, ProductService, LoginSer ],
  bootstrap: [AppComponent]
})
export class AppModule { }
