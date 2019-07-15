import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { UsersComponent } from './users/users.component';
import { EditComponent } from './edit/edit.component';
import { HomedetailsComponent } from './homedetails/homedetails.component';
import { ParentComponent } from './parent/parent.component';
import {TodoComponent} from './todo/todo.component';
import { NgChartComponent } from './ng-chart/ng-chart.component';
const routes: Routes = [
  {path:'', redirectTo:'/users', pathMatch:'full'},
  {path:'users', component:UsersComponent},
  {path:'edit/:id', component:EditComponent},
  {path:'home', component:HomeComponent},
  {path:'homedetails/:id', component:HomedetailsComponent},
  {path:'gallery', component:GalleryComponent},
  {path:'parent' , component:ParentComponent},
  {path:'todo', component:TodoComponent},
  {path: 'ngchart', component:NgChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
