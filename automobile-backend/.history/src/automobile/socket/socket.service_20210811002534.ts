import { Injectable } from '@nestjs/common';
import * as socketCluster from 'socketcluster-client';

@Injectable()
export class SocketService {

    channel;
    result: any;

    socket = socketCluster.create({
        hostname: "localhost",
        port: 8000,
    });

    constructor() {
        this.channel = this.socket.subscribe("connectionw");
    }

    async fileAlert(status: string) {
        console.log(status); 
        this.channel.transmitPublish(status);
    }
}
