import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Job } from 'bull';
import { Vehicle } from 'src/vehicle/entity/vehicle';
import { Repository } from 'typeorm';

@Processor('csv-queue')
export class UploadP {

    private readonly logger = new Logger(CsvConsumerService.name);

    constructor(
        @InjectRepository(Vehicle) private vehicleRepository: Repository<Vehicle>) { }

    /** 
     * process csv file
     * @param job 
     * @returns 
     */
    @Process('csv')
    async handleCsvFiles(job: Job) { 
        this.logger.log('job processor is running...')

        const csv = require('csvtojson')  
        const csvFilePath = process.cwd() + '/' +  job.data.file.path;
        
        const vehicleArray = await csv().fromFile(csvFilePath);
        
        var vehicle : Vehicle; 

        for(vehicle of vehicleArray){
            var manufacturedYear = new Date(vehicle.manufacturedDate);
            var ageOfVehicle = new Date().getFullYear() - manufacturedYear.getFullYear();
            vehicle.ageOfVehicle = ageOfVehicle;
            await this.vehicleRepository.save(vehicle);
        }
    }

}

