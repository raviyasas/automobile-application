import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import { diskStorage } from 'multer';
import { AutomobileService } from './automobile.service';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Controller('/api/vehicles')
export class AutomobileController {

    constructor(private autoService: AutomobileService, @InjectQueue('csv-queue') private fileQueue: Queue){}

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
    async uploadCsv(@UploadedFile() file) : Promise<string[]>{
        // return this.autoService.saveFile(file);
        
      }

}
