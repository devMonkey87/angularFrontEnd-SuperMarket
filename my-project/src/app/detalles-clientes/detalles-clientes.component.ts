import { Component, OnInit } from '@angular/core';
import { PrimerServiceService } from '../servicios/servicioCustomer.service';
import { Customer } from '../Entidades/Customer';
import { TableModule } from 'primeng/table';



@Component({
  selector: 'app-detalles-clientes',
  templateUrl: './detalles-clientes.component.html',
  styleUrls: ['./detalles-clientes.component.css']
})
export class DetallesClientesComponent implements OnInit {
  public clientesDB: Customer[];
  public id: string;
  public isChecked = false;
  public search = false;

  public clienteD: Customer;

  onEnter(value: string) {
    this.id = value;
    this.getClient(this.id);
    console.log(this.id);
    this.search = true;

this.isChecked = false;

  }

  mostrarTodo() {

    console.log(this.isChecked);
    if (this.isChecked === false) {
      this.isChecked = true;

    } else {
      this.isChecked = false;
    }

    this.search = false;

  }

  getClient(id: string) {
    this.primerService.getClienteId(id).subscribe(clienteD => this.clienteD = clienteD);

  }

  constructor(private primerService: PrimerServiceService) { }

  ngOnInit() {
    this.getCustomers();
  }
  getCustomers(): void {
    this.primerService.getClients().subscribe(clientesDB => this.clientesDB = clientesDB);
  }
}




