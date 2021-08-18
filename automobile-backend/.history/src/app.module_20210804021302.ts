import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AutomobileModule } from './automobile/automobile.module';
import { DatabaseModule } from './database/database.module';
import { Automobile.SocketService } from './automobile.socket/automobile.socket.service';

@Module({
  imports: [
    AutomobileModule, 
    DatabaseModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql'
    })],
  controllers: [],
  providers: [Automobile.],
})
export class AppModule {} 
