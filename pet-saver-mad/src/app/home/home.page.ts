import { Component } from '@angular/core';
import { Animal } from '../animal';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  animales: Animal[] = [];
  constructor(private animalService: AnimalService) {}
  ngOnInit() {
    this.getAnimales();
  }

  getAnimales() {
    this.animalService.getAnimales().subscribe((res: Animal[]) => {
      console.log(res);
      this.animales = res;
    }, error => {
      console.log(error);
    })
  }
}
