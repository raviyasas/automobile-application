import { Component, OnInit } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { Vehicle } from 'src/app/vehicle/vehicle.entity';


export const GET_VEHICLES = gql`
          query{
            vehicles{
              id
              make
              model
              year
              engineNumber
            }
          }`

export const DELETE_VEHICLE = gql` mutation($id: Int!) {
  deleteVehicle(id:$id) {
    make
    model
    year
    engineNumber 
  }
}`

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  vehicles: Vehicle[] = [];
  vehicle !: Vehicle;
  private query !: QueryRef<any>;

  constructor(private apollo: Apollo,) { }

  ngOnInit(): void {
    this.getVehicles();
  }

  /**
  * Get all vehicles
  * @param offsetCount 
  */
  getVehicles() {
    this.query = this.apollo.watchQuery({
      query: GET_VEHICLES, fetchPolicy: 'no-cache'
    });

    this.query.valueChanges.subscribe(result => {
      this.vehicles = result.data && result.data.vehicles;
    })
  }

  /**
  * Delete a vehicle
  * @param id 
  */
  deleteVehicle(id: number) {

    if (confirm("Are you sure to delete item with ID " + id)) {

      this.apollo.mutate<any>({
        mutation: DELETE_VEHICLE, variables: { id }, fetchPolicy: 'no-cache'
      }).subscribe(({ data }) => {
        window.location.reload()
      })
    }
  }

}
