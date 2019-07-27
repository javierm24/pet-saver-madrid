import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalService } from '../animal.service';
import { Animal } from '../animal';


@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.page.html',
  styleUrls: ['./animal-form.page.scss'],
})
export class AnimalFormPage implements OnInit {
  idUsuario: string = '';

  public animal: Animal;

  errorMsg: string = '';

  constructor(private router: Router, private animalservice: AnimalService) {
    this.animal = new Animal();
  }
  validateAnimal() {
    this.errorMsg = '';
    if (this.animal.imagen && this.animal.tipo && this.animal.nombre && this.animal.edad && this.animal.descripcion) {
      this.animalservice.validateAnimal(this.idUsuario, this.animal).subscribe(result => {
        console.log('result is ', result);
        this.router.navigate(['/home']);
      }, err => {
        this.errorMsg = 'Error en registro, intente de nuevo';

      })
    }
  }

  ngOnInit() {
    this.checkearUsuario();
  }

  checkearUsuario() {
    const id = localStorage.getItem('idUsuario');
    if (id) {
      this.idUsuario = id;
    } else {
      this.router.navigate(["/"]);
    }
  }

}
