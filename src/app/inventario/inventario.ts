import { Component, inject, signal } from '@angular/core';
import { ProductoService } from '../service/producto-service';

@Component({
  selector: 'app-inventario',
  imports: [],
  templateUrl: './inventario.html',
  styleUrl: './inventario.css',
})
export class Inventario {

  private productosService = inject(ProductoService)
  productos = signal<any>([]);

  ngOnInit() {
    this.productosService.obtenerProductos().subscribe(data=>{
      this.productos.set(data)
    });
  }


}
