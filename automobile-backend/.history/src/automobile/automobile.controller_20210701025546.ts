import { Controller, Post, UploadedFile } from '@nestjs/common';

@Controller('/api/vehicles')
export class AutomobileController {

    constructor(private automobileSer){

    }

    @Post('/upload')
    uploadCsv(@UploadedFile() file){

    }

}
