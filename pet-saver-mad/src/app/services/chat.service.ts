import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }

  crearConversacion(userID_1, userID_2, nombreAnimal, imagenAnimal) {
    return this.http.post('http://localhost:3333/chat/conversacion', {
      userID_1,
      userID_2,
      nombreAnimal,
      imagenAnimal
    })
  }

  getConversacion(idChat: string) {
    return this.http.get(`http://localhost:3333/chat/${idChat}`);
  }

  getMisConversaciones(userid) {
    return this.http.get(`http://localhost:3333/chat/list/${userid}`);
  }

  enviarMensaje(idChat: string, mensaje: string, remitente: string) {
    return this.http.put(`http://localhost:3333/chat/${idChat}`, {
      mensaje,
      remitente
    })
  }
}
