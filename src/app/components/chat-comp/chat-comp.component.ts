import {Component} from '@angular/core';


@Component({
  selector: 'app-chat-comp',
  templateUrl: './chat-comp.component.html',
  styleUrls: ['./chat-comp.component.css']
})
export class ChatCompComponent{
  title = 'WebSocketClient';
  notification: any = {};

  private webSocket: WebSocket;

  constructor() {
    this.webSocket = new WebSocket('ws://localhost:8083/stocks');
    this.webSocket.onmessage = (event) => {
      this.notification = JSON.parse(event.data)
    };
  }
}
