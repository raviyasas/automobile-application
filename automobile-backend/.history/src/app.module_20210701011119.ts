import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [AppController, Automobile.ControllerController],
  providers: [AppService],
})
export class AppModule {}
