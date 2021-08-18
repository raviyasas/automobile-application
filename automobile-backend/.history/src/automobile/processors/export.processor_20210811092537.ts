import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { SocketService } from '../socket/socket.service';

@Processor('export-queue')
export class ExportProcessor {

    constructor(private socketService: SocketService) { }

    converter = require('json-2-csv');
    fs = require('fs');
    i = 0;

    @Process('myFile')
    exportCsv(job: Job) {


        this.converter.json2csv(job.data.vehicleList, async (err, csv) => {
            let fileName = 'vehicles_' + this.i;
            if (err) {
                throw err;
            }

            this.fs.writeFileSync(fileName.concat('.csv'), csv);
            this.i++;

            if (this.fs.existsSync('./' + fileName.concat('.csv'))) {
                this.socketService.fileAlert('success');
            } else {
                this.socketService.fileAlert('error');
            }
        });
    }
}
