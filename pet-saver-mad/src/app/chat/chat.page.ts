import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Conversacion } from '../conversacion';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  conversacion: Conversacion;
  texto: string = '';
  idUsuario: string = '';

  constructor(private actRoute: ActivatedRoute, private router: Router, private chatService: ChatService) { }

  ngOnInit() {
    this.checkearUsuario();
    this.leerRuta();
  }

  leerRuta() {
    this.actRoute.params.subscribe(params =>
      this.getConversacion(params.idChat)
    );
  }

  checkearUsuario() {
    const id = localStorage.getItem('idUsuario');
    if (id) {
      this.idUsuario = id;
    } else {
      this.router.navigate(["/"]);
    }
  }

  getConversacion(idChat) {
    this.chatService.getConversacion(idChat).subscribe((res: Conversacion) => {
      console.log(res);
      this.conversacion = res;
    }, err => {
      console.log(err);
    })
  }

  enviarMensaje() {
    const texto = this.texto;
    this.texto = '';
    this.chatService.enviarMensaje(
      this.conversacion._id,
      texto,
      this.idUsuario
      ).subscribe((res: Conversacion) => {
      console.log(res);
      this.conversacion = res;
    }, err => {
      console.log(err);
    })
  }
}


