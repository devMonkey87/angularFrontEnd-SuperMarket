import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../servicios/servicioProductos.service';
import { Product } from '../Entidades/product';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detalles-productos',
  templateUrl: './detalles-productos.component.html',
  styleUrls: ['./detalles-productos.component.css']
})
export class DetallesProductosComponent implements OnInit {


  public productById: Product;
  public produsDB: Product[];
  public isChecked = false;

  public showProdus = false;

  public id: string;

  nombreProducto = '';

  public productX: Product;
  public idProducto = '';

  onEnter(value: string) {
    this.nombreProducto = value;
    this.getProductosByName();
    this.showProdus = true;

  }
  mostrarTodo() {

    if (this.isChecked === false) {
      this.isChecked = true;

    } else {
      this.isChecked = false;
    }

  }

  getProduct(id): void {
    this.prodService.getProduct(id).subscribe(productById => this.productX = productById);
  }

  getProductosByName() {
    this.prodService.getProdsByName(this.nombreProducto).subscribe(produsDB => this.produsDB = produsDB);


  }

  constructor(private prodService: ProductService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('referencia');
    console.log(this.id);
    this.getProduct(this.id);
  }

}
