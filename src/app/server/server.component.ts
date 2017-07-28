import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  // styleUrls: ['./server.component.css']
  styles: [`
    .online{
      color : white;
    }
  `]
})
export class ServerComponent implements OnInit {
  serverID = 10;
  serverStatus = 'offline';
  getServerStatus() {
    return this.serverStatus;
  }
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit() {
  }
  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}
