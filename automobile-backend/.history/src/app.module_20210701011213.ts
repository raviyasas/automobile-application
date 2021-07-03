import { Module } from '@nestjs/common';
import { AutomobileModule } from './automobile/automobile.module';

@Module({
  imports: [AutomobileModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
