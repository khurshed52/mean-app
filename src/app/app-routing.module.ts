import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { UsersComponent } from './users/users.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path:'', redirectTo:'/users', pathMatch:'full'},
  {path:'users', component:UsersComponent},
  {path:'edit/:id', component:EditComponent},
  {path:'home', component:HomeComponent},
  {path:'gallery', component:GalleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
