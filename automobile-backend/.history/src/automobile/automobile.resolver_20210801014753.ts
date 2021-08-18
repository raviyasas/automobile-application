import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Vehicle } from "./vehicle";
import { request, gql } from 'graphql-request';

@Resolver(() => Vehicle)
export class AutomobileResolver {

  @Query(() => Vehicle)
  async vehicle(@Args({ name: 'id', type: () => Int }) id: number): Promise<Vehicle> {
    const query = gql`query MyQuery {
      vehicleById(id: ${id}) {
        id
        make
        model
        year
        engineNumber
      }
    }`
    return request('http://localhost:5000/graphql', query).then((data) => {
      return data.vehicleById;
    });
  }

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
            }}}`

    return request('http://localhost:5000/graphql', query).then((data) => {
      return data.allVehicles.nodes;
    });
  }

  // @Mutation(() => Vehicle)
  // async updateVehicle(
  //   @Args({ name: 'id', type: () => Int }) id: number,
  //   @Args({ name: 'make', type: () => String }) make: string,
  //   @Args({ name: 'model', type: () => String }) model: string,
  //   @Args({ name: 'year', type: () => String }) year: string) {

  //   const mutation = gql`mutation MyMutation {
  //     updateVehicleById(
  //       input: {vehiclePatch: {make: "${make}", model: "${model}", year: "${year}"}, id: ${id}}
  //     ) {
  //       vehicle {
  //         id
  //         make
  //         model
  //         year
  //       }}}`

  //   return request('http://localhost:5000/graphql', mutation).then((data) => {
  //     return data.updateVehicleById.vehicle;
  //   });
  // }

  /

}