import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {

  private http = inject(HttpClient);
  private apiUrl ='https://fakestoreapi.com/products';

  obtenerProductos (){
    return this.http.get<any[]>(this.apiUrl)
  }
}
