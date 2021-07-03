import { Controller, Post, UploadedFile } from '@nestjs/common';
import { AutomobileService } from './automobile.service';

@Controller('/api/vehicles')
export class AutomobileController {

    constructor(private automService: AutomobileService){

    }

    @Post('/upload')
    uploadCsv(@UploadedFile() file){

    }

}
