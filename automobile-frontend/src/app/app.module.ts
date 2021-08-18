import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UploadComponent } from './upload/upload.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './vehicle/edit/edit.component';
import { ViewComponent } from './vehicle/view/view.component';
import { ExportComponent } from './vehicle/export/export.component';
import { GraphQLModule } from './graphql.module';
import { AutoFocusDirective } from './autofocus.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UploadComponent,
    NavbarComponent,
    EditComponent,
    ViewComponent,
    ExportComponent,
    AutoFocusDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    GraphQLModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
