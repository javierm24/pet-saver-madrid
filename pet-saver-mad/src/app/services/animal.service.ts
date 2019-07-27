import { Injectable } from '@angular/core';
import { Animal } from '../animal';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http: HttpClient) { }
  validateAnimal(idUsuario: string, animal: Animal) {
    return this.http.post('http://localhost:3333/animales', {
      imagen: animal.imagen,
      tipo: animal.tipo,
      nombre: animal.nombre,
      edad: animal.edad,
      descripcion: animal.descripcion,
      dueno: idUsuario
    })
  }

  getAnimales() {
    return this.http.get('http://localhost:3333/animales');
  }
}
