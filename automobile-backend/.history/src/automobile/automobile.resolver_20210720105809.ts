import { Query, Resolver } from "@nestjs/graphql";
import { Vehicle } from "./vehicle";
import { request, gql } from 'graphql-request';

@Resolver(of => Vehicle)
export class AutomobileResolver{

    @Query(() => [Vehicle])
    async vehicles() {

        const query = gql`query MyQuery {
            vehicles{
              id
              make
              model
              year
              engineNumber        
            }     
          }` 

          return request('http://localhost:3000/graphql', query).then((data) => {
            return data.vehicles;
          });       
    } 

}