import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AutomobileModule } from './automobile/automobile.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    AutomobileModule, 
    DatabaseModule,
    GraphQLModule.],
  controllers: [],
  providers: [],
})
export class AppModule {} 
