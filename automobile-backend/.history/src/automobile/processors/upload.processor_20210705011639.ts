import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Job } from 'bull';
import { Vehicle } from 'src/automobile/vehicle';
import { Repository } from 'typeorm';

@Processor('csv-queue')
export class UploadProcessor {

    constructor(
        @InjectRepository(Vehicle) private vehicleRepository: Repository<Vehicle>) { }

    /** 
     * process csv file
     * @param job 
     * @returns 
     */
    @Process('csv')
    async handleCsvFiles(job: Job) : { 

        const csv = require('csvtojson')
        const csvFilePath = process.cwd() + '/' + job.data.file.path;

        const vehicleArray = await csv().fromFile(csvFilePath);
        var vehicles;

        try {
            vehicles = await this.vehicleRepository.save(vehicleArray);
        } catch (error) {
            vehicles = null; 
        }
        return vehicles;
    }

}

