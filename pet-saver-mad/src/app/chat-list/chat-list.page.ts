import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.page.html',
  styleUrls: ['./chat-list.page.scss'],
})
export class ChatListPage implements OnInit {

  constructor() { }

  ngOnInit() {const searchbar = document.querySelector('ion-searchbar');
  const items = Array.from(document.querySelector('ion-list').children);
  searchbar.addEventListener('ionInput', handleInput);
  function handleInput(event) {
    const query = event.target.value.toLowerCase();
    requestAnimationFrame(() => {
      items.forEach(item => {
        const shouldShow = item.textContent.toLowerCase().indexOf(query) > -1;
        item.style.display = shouldShow ? 'block' : 'none';
      });
    });
  }
  }

}
