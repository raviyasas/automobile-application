import { Injectable } from '@nestjs/common';
import { Vehicle } from './vehicle';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AutomobileService {

    constructor(@InjectRepository(Vehicle) private vehicleRepository: Repository<Vehicle>){}

    async saveFile(file: any) {
        const csv = require('csvtojson')  
        const csvFilePath = process.cwd() + '/' +  file.path;
        
        const vehicleArray = await csv().fromFile(csvFilePath);
        
        
        var vehicle : Vehicle; 

        for(vehicle of vehicleArray){
            await this.vehicleRepository.save(vehicle);
        }
    }
}
