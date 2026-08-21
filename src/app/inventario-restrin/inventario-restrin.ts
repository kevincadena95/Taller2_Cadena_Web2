import { Component, inject, signal } from '@angular/core';
import { ProductoService } from '../service/producto-service';

@Component({
  selector: 'app-inventario-restrin',
  imports: [],
  templateUrl: './inventario-restrin.html',
  styleUrl: './inventario-restrin.css',
})
export class InventarioRestrin {

    private productosService = inject(ProductoService)
    productos = signal<any>([]);
  
    ngOnInit() {
      this.productosService.obtenerProductos().subscribe(data=>{
        this.productos.set(data)
      });
    }

}
