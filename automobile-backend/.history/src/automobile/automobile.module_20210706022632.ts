import { Module } from '@nestjs/common';
import { AutomobileController } from './automobile.controller';
import { AutomobileService } from './automobile.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicle } from './vehicle';
import { BullModule } from '@nestjs/bull';
import { UploadProcessor } from './processors/upload.processor';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  controllers: [AutomobileController],
  providers: [AutomobileService, UploadProcessor],
  imports: [
    TypeOrmModule.forFeature([Vehicle]),
    BullModule.forRoot({
      redis:{
        host:'localhost',
        port:6379
      },
    }),
    BullModule.registerQueue({
      name: 'upload-queue'
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql'
    })]]
})
export class AutomobileModule {}
