import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../Entidades/product';
import { CLIENTES } from '../mock-Clientes';
import { Customer } from '../Entidades/Customer';
import { PrimerServiceService } from '../servicios/servicioCustomer.service';
import { ProductService } from '../servicios/servicioProductos.service';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public produsDB: Product[];
  public produsDBiniciales: Product[];

  public produsDB2: Product[];

  public isChecked = false;

  public showProdus = false;

  nombreProducto = 'x';


  public productoPorId: Product;



  selectedClient: Customer;

  mostrarTodo() {

    console.log(this.isChecked);
    if (this.isChecked === false) {
      this.isChecked = true;
      console.log(this.isChecked);

    } else {
      this.isChecked = false;
    }
    this.showProdus = false;

  }
  onEnter(value: string) {
    this.getProductosByName(value);
    console.log(this.nombreProducto);
    this.showProdus = true;
    console.log(this.showProdus);

    this.isChecked = false;

  }

  onSelect(cliente: Customer): void {
    this.selectedClient = cliente;
  }

  getProductosByName(nombreBuscar: string) {
    this.prodService.getProdsByName(nombreBuscar).subscribe(produsDB2 => this.produsDB2 = produsDB2);


  }
  constructor(private prodService: ProductService) { }

  ngOnInit() {
    this.getProdus();

  }
  getProdus(): void {
    this.prodService.getProducts().subscribe(produsDBiniciales => this.produsDBiniciales = produsDBiniciales);
  }





}


