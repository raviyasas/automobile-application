import { Injectable } from '@nestjs/common';
import { Vehicle } from './vehicle';

@Injectable()
export class AutomobileService {

    async saveFile(file: any) {
        const csv = require('csvtojson')  
        const csvFilePath = process.cwd() + '/' +  job.data.file.path;
        
        const vehicleArray = await csv().fromFile(csvFilePath);
        
        var vehicle : Vehicle; 

        for(vehicle of vehicleArray){
            
            await this.vehicleRepository.save(vehicle);
        }
    }
}
