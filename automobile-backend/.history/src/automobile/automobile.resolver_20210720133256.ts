import { Query, Resolver } from "@nestjs/graphql";
import { Vehicle } from "./vehicle";
import { request, gql } from 'graphql-request';

@Resolver(of => Vehicle)
export class AutomobileResolver{

    @Query(() => [Vehicle])
    async vehicles() {

        const query = gql`query MyQuery {
          allVehicles {
            nodes {
              id
              make
              engineNumber
              model
              year
            }
          }
        }` 

          return request('http://localhost:5000/graphql', query).then((data) => {
            return data.allVehicles.nodes;
          });       
    } 

}