import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  private user = 'usuario';
  private password = '12345';

  entrar(usuario: string, contraseña: string): boolean {

    if (this.user === usuario && this.password === contraseña) {
      localStorage.setItem('userAuth', usuario)
      return true;
    } else {
      return false;
    }
  }
  

  logut(){
    return localStorage.removeItem('token')
  }

  estarLogeado(): boolean{
    return localStorage.getItem('token') !== null;

  }
}
