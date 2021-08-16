        import { Process, Processor } from '@nestjs/bull';
        import { Job } from 'bull';
        import { SocketClusterService } from './socket-cluster.service';

        @Processor('export-queue')
        export class ExportService {

            constructor(private socketClusterService: SocketClusterService) {}

            converter = require('json-2-csv');
            fs = require('fs');
            i=0;

            @Process('myFile')
            exportCsv(job: Job) {


                this.converter.json2csv(job.data.vehicleList, async (err, csv) => {
                    let fileName = 'vehicles_' + this.i;
                    if (err) {
                        throw err;
                    }
                    
                    this.fs.writeFileSync(fileName.concat('.csv'), csv);
                    this.i++;

                    if(this.fs.existsSync('./' + fileName.concat('.csv'))){
                        // this.socketClusterService.fileAlert('success');
                    }else{
                        // this.socketClusterService.fileAlert('error');
                    }
                });
            }
        }
