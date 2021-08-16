import { Injectable } from '@angular/core';
import * as socketCluster from 'socketcluster-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  channel;
  result: any;

  socket = socketCluster.create({
    hostname: "localhost",
    port: 8000,
  });

  constructor() {
    this.channel = this.socket.subscribe("connection").once();
  }

  async getStatus(): Promise<any>{
    for await (let data of await this.channel) {
      // this.result = data;
      return data;
    }
    // return this.result;
}

}
