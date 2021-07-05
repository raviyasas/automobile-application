import { Module } from '@nestjs/common';
import { AutomobileController } from './automobile.controller';
import { AutomobileService } from './automobile.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicle } from './vehicle';
import { BullModule } from '@nestjs/bull';

@Module({
  controllers: [AutomobileController],
  providers: [AutomobileService],
  imports: [
    TypeOrmModule.forFeature([Vehicle]),
    BullModule.forRoot({
      redis:{
        host:'loc'
      }
    })]
})
export class AutomobileModule {}
