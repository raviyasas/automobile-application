import { Injectable } from '@nestjs/common';
import * as socketCluster from 'socketcluster-client';

@Injectable()
export class SocketService {

    myChannel;
    // socket;

    socket = socketCluster.create({
        hostname: 'localhost',
        port: 8000
    });

    constructor() {
        this.myChannel = this.socket.subscribe("connection");

    }

    async fileAlert(status: string) {
        // Publish data to the channel.
        // this.myChannel.transmitPublish(status);
        this.socket.transmitPublish(this.myChannel, 'T);
    }
}
