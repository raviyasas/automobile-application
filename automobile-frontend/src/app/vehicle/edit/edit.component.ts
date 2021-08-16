import { Component, OnInit } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { ActivatedRoute } from '@angular/router';
import { Vehicle } from '../vehicle.entity';

export const GET_VEHICLE = gql`
query($id: Int!) {
  vehicle(id: $id){
    make
    model
    year
    engineNumber
  }
}`

export const UPDATE_VEHICLE = gql` mutation MyMutation(
  $id: Int!, 
  $make:String!, 
  $model:String!,  
  $year:String!){
    updateVehicle(
      id: $id,
      make: $make,
      model: $model,
      year: $year){make model year
  }
}`

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  private query !: QueryRef<any,any> ;
  id: number;
  make!: string;
  model!: string;
  year!: string;
  vehicle!: Vehicle;
  data: any;

  constructor(private apollo: Apollo, private route: ActivatedRoute) {
    //get id as a number
    this.id = +this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.getVehicle(this.id);
  }

  getVehicle(id: number) {
    this.query = this.apollo.watchQuery({
      query: GET_VEHICLE, variables: { id }, fetchPolicy:'no-cache'
    });

    this.query.valueChanges.subscribe(({ data }) => {
      this.data = data;
      this.make = this.data.vehicle.make;
      this.model = this.data.vehicle.model;
      this.year = this.data.vehicle.year;
    });
  }

  /**
   * Edit vehicle
   */
  editVehicle() {

    if (confirm("Are you sure to save?")) {
      let id = this.id;
      let make = this.make;
      let model = this.model;
      let year = this.year;

      this.apollo.mutate<any>({
        mutation: UPDATE_VEHICLE, variables: { id, make, model, year }, fetchPolicy:'no-cache'
      }).subscribe(({ data }) => {
        if(data != null){
          alert("Data updated successfully !")
          window.location.href = './vehicles';
        }
      })
    } 
  }

}
