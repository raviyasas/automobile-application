import { Component } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export const EXPORT_VEHICLES = gql`query($year: String!) {
        vehiclesByYear(year:$year) {
          id
          make
          model
          year
          engineNumber
        }      
      }`

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css']
})
export class ExportComponent {

  year: any;
  query!: QueryRef<any, any>;
  status: any;

  constructor(
    private apollo: Apollo) {
  }

  form = new FormGroup({
    year: new FormControl('', [Validators.required])
  });

  get f() {
    return this.form.controls;
  }

  onExportClick() {

    const year = this.form.get('year')?.value;

    this.query = this.apollo.watchQuery({
      query: EXPORT_VEHICLES, variables: { year }
    });

    this.query.valueChanges.subscribe((data) => {
      if (data.error) {
        alert("File export error !")
      } else {
        alert("File exported successfully !")
      }
    });
  }
}
