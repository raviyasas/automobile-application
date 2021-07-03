import { Controller, Post, UploadedFile } from '@nestjs/common';

@Controller('/api/vehicles')
export class AutomobileController {

    constructor(p){

    }

    @Post('/upload')
    uploadCsv(@UploadedFile() file){

    }

}
