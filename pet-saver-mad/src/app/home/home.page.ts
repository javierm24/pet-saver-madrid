import { Component } from '@angular/core';
import {animalService} from '../animal-list/animalService';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  dogs;
  constructor(private AnimalService: animalService) {
  
  }
  ngOnInit() {
    this.searchAnimal();
  }
  searchAnimal(){
    this.AnimalService.animals('perro').subscribe(data => {
      this.dogs = data;
    });
  }
}
