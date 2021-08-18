import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from './upload/upload.component';
import { EditComponent } from './vehicle/edit/edit.component';
import { ExportComponent } from './vehicle/export/export.component';
import { ViewComponent } from './vehicle/view/view.component';

const routes: Routes = [
  {
    path: 'upload',
    pathMatch: 'full',
    component: UploadComponent
  },
  {
    path: 'vehicles',
    pathMatch: 'full',
    component: ViewComponent
  },
  {
    path: 'edit/:id',
    pathMatch: 'full',
    component: EditComponent
  },
  {
    path: 'export',
    pathMatch: 'full',
    component: ExportComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
