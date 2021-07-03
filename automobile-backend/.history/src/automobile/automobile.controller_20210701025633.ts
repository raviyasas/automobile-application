import { Controller, Post, UploadedFile } from '@nestjs/common';

@Controller('/api/vehicles')
export class AutomobileController {

    constructor(private automobileService: AutomobileService){

    }

    @Post('/upload')
    uploadCsv(@UploadedFile() file){

    }

}
