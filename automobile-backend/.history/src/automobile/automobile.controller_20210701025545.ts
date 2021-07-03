import { Controller, Post, UploadedFile } from '@nestjs/common';

@Controller('/api/vehicles')
export class AutomobileController {

    constructor(private automobileS){

    }

    @Post('/upload')
    uploadCsv(@UploadedFile() file){

    }

}
