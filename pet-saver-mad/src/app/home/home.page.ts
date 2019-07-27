import { Component } from '@angular/core';
import { Animal } from '../animal';
import { AnimalService } from '../services/animal.service';
import { Router } from '@angular/router';
import { ChatService } from '../services/chat.service';
import { Conversacion } from '../conversacion';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  idUsuario: string = '';
  tipoAnimal: string = '';
  animalesTodos: Animal[] = [];
  animalesFiltrados: Animal[] = [];

  constructor(private animalService: AnimalService, private chatService: ChatService, private router: Router) {}

  ngOnInit() {
    this.checkearUsuario();
    this.getAnimales();
    window.scrollTo(0, 0);
  }

  ionViewWillEnter(){
    this.checkearUsuario();
    this.getAnimales();
    window.scrollTo(0, 0);
  }

  checkearUsuario() {
    const id = localStorage.getItem('idUsuario');
    if (id) {
      this.idUsuario = id;
    } else {
      this.router.navigate(["/"]);
    }
  }

  getAnimales() {
    this.animalService.getAnimales().subscribe((res: Animal[]) => {
      console.log(res);
      this.animalesTodos = [ ...res ];
      this.animalesFiltrados = [ ...res ];
    }, error => {
      console.log(error);
    })
  }

  cambiaTipo() {
    if (this.tipoAnimal === "TODOS") {
      this.animalesFiltrados = this.animalesTodos;
      return;
    }

    this.animalesFiltrados = this.animalesTodos.filter(animal => {
      if (animal.tipo === this.tipoAnimal) {
        return animal;
      }
    })
  }

  irAChat(animal) {
    const userID_2 = animal.dueno._id;
    this.chatService.crearConversacion(
      this.idUsuario, 
      userID_2, 
      animal.nombre,
      animal.imagen
    ).subscribe((res: Conversacion) => {
      console.log(res);
      this.router.navigate([`/chat/${res._id}`])
    }, err => {
      console.log(err);
    })
  }
}
