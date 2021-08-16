import { Component } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { SocketService } from 'src/app/socket.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators} from '@angular/forms';

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
  // data: any;
  query!: QueryRef<any, any>;
  status: any;
  // subscription: Subscription | undefined;

  constructor(
    private apollo: Apollo, 
    private socketClusterService: SocketService, 
    private toastr: ToastrService) {
  }

  form = new FormGroup({
    year: new FormControl('', [Validators.required])
  });

  get f(){
    return this.form.controls;
  }

  /**
   * Export vehicle
   */
  onExportClick() {

    const year = this.form.get('year')?.value;

    this.query = this.apollo.watchQuery({
      query: EXPORT_VEHICLES, variables: { year }
    });

    this.query.valueChanges.subscribe((data) => {
      if (data.error) {
        console.log("fail");
      } else {
        this.socketClusterService.getStatus().then(value => {
          this.status = value;
          console.log(this.status);
          if (value === 'success') {
            console.log("success")
            this.toastr.success('Data exported successfully', 'Success');
            setTimeout(() => {
              window.location.reload()
            }, 6000);
          } else {
            this.toastr.error('Please try again', 'Error');
          }
        })
      }
    });
  }
}
