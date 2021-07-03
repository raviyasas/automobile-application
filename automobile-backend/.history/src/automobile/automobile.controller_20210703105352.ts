import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import { diskStorage } from 'multer';
import { AutomobileService } from './automobile.service';

@Controller('/api/vehicles')
export class AutomobileController {

    constructor(private autoService: AutomobileService){}

    @Post('/upload')
    @UseInterceptors(FileInterceptor("csv", {
        storage: diskStorage({
          destination: './csv',
          filename: (req, file, cb) => {
            const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
            cb(null, `${randomName}${extname(file.originalname)}`)
          }
        })
      }))
    uploadCsv(@UploadedFile() file) : string statu{
        this.autoService.saveFile(file);
    }

}
