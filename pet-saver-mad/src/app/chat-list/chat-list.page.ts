import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from '../services/chat.service';
import { Conversacion } from '../conversacion';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.page.html',
  styleUrls: ['./chat-list.page.scss'],
})
export class ChatListPage implements OnInit {
  idUsuario: string = '';
  conversaciones: Conversacion[] = [];

  constructor(private router: Router, private chatService: ChatService) { }

  ngOnInit() {
    this.checkearUsuario();
  }

  checkearUsuario() {
    const id = localStorage.getItem('idUsuario');
    if (id) {
      this.idUsuario = id;
      this.getMisConversaciones(id);
    } else {
      this.router.navigate(["/"]);
    }
  }

  getMisConversaciones(idUsuario: string) {
    this.chatService.getMisConversaciones(idUsuario).subscribe((res: Conversacion[]) => {
      console.log(res);
      this.conversaciones = res;
    }, err => {
      console.log(err);
    })
  }

  irAChat(conversacion) {
    this.router.navigate([`/chat/${conversacion._id}`]);
  }
}
