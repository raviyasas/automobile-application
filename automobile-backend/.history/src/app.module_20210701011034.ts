import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutomobileModule } from './automobile/automobile.module';
import { Automobile.ControllerController } from './automobile.controller/automobile.controller.controller';

@Module({
  imports: [AutomobileModule],
  controllers: [AppController, Automobile.ControllerController],
  providers: [AppService],
})
export class AppModule {}
