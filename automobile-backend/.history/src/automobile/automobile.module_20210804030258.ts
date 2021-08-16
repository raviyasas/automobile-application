import { Module } from '@nestjs/common';
import { AutomobileController } from './automobile.controller';
import { AutomobileService } from './automobile.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicle } from './vehicle';
import { BullModule } from '@nestjs/bull';
import { UploadProcessor } from './processors/upload.processor';
import { AutomobileResolver } from './automobile.resolver';
import { ExportProcessor } from './processors/export.processor';
import { SocketService } from './socket/socket.service';

@Module({
  controllers: [AutomobileController],
  providers: [AutomobileService, UploadProcessor, AutomobileResolver, ExportProcessor, SocketService],
  imports: [
    TypeOrmModule.forFeature([Vehicle]),
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379
      },
    }),
    BullModule.registerQueue({
      name: 'upload-queue'
    }),
    BullModule.registerQueue({
      name: 'export-queue'
    })]
})
export class AutomobileModule { }
