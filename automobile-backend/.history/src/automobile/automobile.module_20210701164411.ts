import { Module } from '@nestjs/common';
import { AutomobileController } from './automobile.controller';
import { AutomobileService } from './automobile.service';

@Module({
  controllers: [AutomobileController],
  providers: [AutomobileService],
  imports: [TypeOrmModule.forFeature([Vehicle]),
})
export class AutomobileModule {}