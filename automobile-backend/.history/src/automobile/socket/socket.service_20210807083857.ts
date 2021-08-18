        import { Injectable } from '@nestjs/common';
        import * as socketClusterClient from 'socketcluster-client';

        @Injectable()
        export class SocketService {

            myChannel;
            socket;

            constructor() {

                this.socket = socketClusterClient.create({
                    hostname: 'localhost',
                    port: 8000
                });

                (async () => {
                    this.myChannel = this.socket..subscribe("connection");
                })();
            }

            async fileAlert(status: string) {
                this.myChannel.transmitPublish(status);
            }
        }
