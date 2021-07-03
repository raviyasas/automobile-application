import { Controller, Post, UploadedFile } from '@nestjs/common';

@Controller('/api/vehicles')
export class AutomobileController {

    constructor(private auto){

    }

    @Post('/upload')
    uploadCsv(@UploadedFile() file){

    }

}
