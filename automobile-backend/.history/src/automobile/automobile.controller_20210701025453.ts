import { Controller, Post, UploadedFile } from '@nestjs/common';

@Controller('/api/vehicles')
export class AutomobileController {

    @Post('/upload')
    uploadCsv(@UploadedFile() file){
        
    }

}
