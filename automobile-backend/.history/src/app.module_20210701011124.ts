import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [AppControlle],
  providers: [AppService],
})
export class AppModule {}
