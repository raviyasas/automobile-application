import { Injectable } from '@nestjs/common';
import * as socketCluster from 'socketcluster-client';

myChannel;
socket;

constructor() {

    this.socket = socketClusterClient.create({
        hostname: 'localhost',
        port: 8000
    });

    (async () => {
        this.myChannel = this.socket.subscribe("connection");
    })();
}

async fileAlert(status: string) {
    // Publish data to the channel.
    this.myChannel.transmitPublish(status);
}
