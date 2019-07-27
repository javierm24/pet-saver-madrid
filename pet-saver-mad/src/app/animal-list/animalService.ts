import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
  export class animalService {
  
    constructor(private http: HttpClient) {
  
    }
    animals(tipo){
        const url = 'http://localhost:3333/animales/search/' + tipo;
        return this.http.get(url);
    }

}