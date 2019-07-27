import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {

  }

  validateLogin(user: User) {
    return this.http.post('http://localhost:3333/usuario/login', {
      
      usuario: user.usuario,
      contrasena: user.contrasena
    }) 
   
  }

  validateRegistro(user: User) {
    return this.http.post('http://localhost:3333/usuario/registro', {
      email: user.email,
      usuario: user.usuario,
      contrasena: user.contrasena
    })
  }
}
