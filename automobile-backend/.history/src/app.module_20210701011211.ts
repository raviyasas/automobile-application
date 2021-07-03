import { Module } from '@nestjs/common';
import { AutomobileModule } from './automobile/automobile.module';

@Module({
  imports: [AutomobileModule],
  controllers: [ControllerController],
  providers: [],
})
export class AppModule {}
