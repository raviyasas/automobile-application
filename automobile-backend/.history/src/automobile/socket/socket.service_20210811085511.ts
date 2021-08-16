import { Injectable } from '@nestjs/common';
import * as socketCluster from 'socketcluster-client';

@Injectable()
export class SocketService {

    myChannel;
    socket;

    constructor() {

        this.socket = socketCluster.create({
            hostname: 'localhost',
            port: 8000
        });

        (async () => {
            this.myChannel = this.socket.subscribe("connection");
        }).();
    }

    async fileAlert(status: string) {
        // Publish data to the channel.
        this.myChannel.transmitPublish(status);
    }
}
