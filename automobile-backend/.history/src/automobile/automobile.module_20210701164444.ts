import { Module } from '@nestjs/common';
import { AutomobileController } from './automobile.controller';
import { AutomobileService } from './automobile.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicle } from './vehicle

@Module({
  controllers: [AutomobileController],
  providers: [AutomobileService],
  imports: [TypeOrmModule.forFeature([Vehicle])]
})
export class AutomobileModule {}
