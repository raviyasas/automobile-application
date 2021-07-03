import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [AppController, Automobile.],
  providers: [AppService],
})
export class AppModule {}
