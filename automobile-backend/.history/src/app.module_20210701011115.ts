import { Module } from '@nestjs/common';

@Module({
  imports: [AutomobileModule],
  controllers: [AppController, Automobile.ControllerController],
  providers: [AppService],
})
export class AppModule {}
