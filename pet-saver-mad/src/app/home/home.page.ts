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
  animales: Animal[] = [];

  constructor(private animalService: AnimalService, private chatService: ChatService, private router: Router) {}

  ngOnInit() {
    this.checkearUsuario();
    this.getAnimales();
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
      this.animales = res;
    }, error => {
      console.log(error);
    })
  }

  irAChat(animal) {
    const userID_2 = animal.dueno;
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
