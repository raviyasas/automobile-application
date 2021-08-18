        import { Injectable } from '@nestjs/common';
        import * as socketClusterClient from 'socketcluster-client';

        @Injectable()
        export class SocketService {

            channel;
  result : any;

  socket = socketCluster.create({
    hostname: "localhost",
    port: 8000,
  });

  constructor() {
    this.channel = this.socket.subscribe("connection");
  }
 
            async fileAlert(status: string) {
                console.log(status);
                this.myChannel.transmitPublish(status); 
            }
        }
