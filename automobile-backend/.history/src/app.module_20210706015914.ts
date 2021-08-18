import { Module } from '@nestjs/common';
import { AutomobileModule } from './automobile/automobile.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    AutomobileModule, 
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {} 
