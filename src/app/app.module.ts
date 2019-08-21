import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { UsersComponent } from './users/users.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import {MatButtonModule, MatInputModule,  MatCardModule, MatIconModule, MatMenuModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { EditComponent } from './edit/edit.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import {NgxPaginationModule} from 'ngx-pagination';
import { HomedetailsComponent } from './homedetails/homedetails.component';
import { SortdataPipe } from './pipes/sortdata.pipe';
import { BlueColorDirective } from './directive/blue-color.directive';
import { ParentComponent } from './parent/parent.component';
import { TodoComponent } from './todo/todo.component';
import { AgmCoreModule } from '@agm/core';
import {MaterialModule} from './material/material.module';
import { ChartsModule } from 'ng2-charts';
import { NgChartComponent } from './ng-chart/ng-chart.component';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgProgressModule } from 'ngx-progressbar';
import { EllipsisModule } from 'ngx-ellipsis';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { OwlModule } from 'ngx-owl-carousel';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    GalleryComponent,
    UsersComponent,
    EditComponent,
    HomedetailsComponent,
    SortdataPipe,
    BlueColorDirective,
    ParentComponent,
    TodoComponent,
    NgChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MaterialModule,
    OwlModule,
    LazyLoadImageModule,
    NgxPaginationModule,
    ChartsModule,
    Ng4LoadingSpinnerModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgxSpinnerModule,
    NgProgressModule,
    EllipsisModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDDkpiRnWEuyvar1roCdSb89THM7MnHjRc'
    }),
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
