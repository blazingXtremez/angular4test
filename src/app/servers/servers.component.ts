import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: '<app-server></app-server><app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServers = false;
  serverCreationStatus = 'No Server was created';
  serverName = '';
  serverCreated = false;
  // userName = '';
  // users = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServers = true;
    }, 2000);
  }

  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Server Name ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    // console.log(event.target.value);
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(this.serverName);
  }

  // onResetUser() {
  //   this.userName = '';
  // }

  // enableReset() {
  //   this.users = true;
  // }

}
