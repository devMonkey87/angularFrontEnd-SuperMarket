import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';
import { GalleriaModule } from 'primeng/galleria';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  public titulo = `Landete's MegaStore`;

  images: any[];


  items: MenuItem[];
  activeItem: MenuItem;
  ngOnInit() {
    this.items = [
      { label: 'INICIO', icon: 'fa fa-fw fa-book', routerLink: ['/'] },
      { label: 'PRODUCTOS', icon: 'fa fa-fw fa-bar-chart', routerLink: ['/lista'] },
      { label: 'CLIENTES', icon: 'fa fa-fw fa-calendar', routerLink: ['/detallesCliente'] },
      { label: 'LOGIN', icon: 'fa fa-fw fa-calendar', routerLink: ['/login'] }


    ];

    this.activeItem = this.items[0];

    this.images = [];
    this.images.push({ source: 'assets/showcase/imagenes/embutido.jpg', alt: 'Description for Image 1', title: 'Title 1' });
    this.images.push({ source: 'assets/showcase/imagenes/fruta.jpg', alt: 'Description for Image 2', title: 'Title 2' });
    this.images.push({ source: 'assets/showcase/imagenes/jamon.jpg', alt: 'Description for Image 3', title: 'Title 3' });
    this.images.push({ source: 'assets/showcase/imagenes/pan.jpg', alt: 'Description for Image 4', title: 'Title 4' });
    this.images.push({ source: 'assets/showcase/imagenes/vino.jpg', alt: 'Description for Image 5', title: 'Title 5' });
    this.images.push({ source: 'assets/showcase/imagenes/descarga.jpg', alt: 'Description for Image 1', title: 'Title 1' });

  }

}
