import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddlistComponent } from './addlist/addlist.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { AdmindashdetailComponent } from './admindashdetail/admindashdetail.component';
import { ListingComponent } from './listing/listing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserdashComponent } from './userdash/userdash.component';
import { UserdashdetailComponent } from './userdashdetail/userdashdetail.component';

const routes: Routes = [
  { path: '', redirectTo: '/listing', pathMatch: 'full' },
{ path: 'register', component: RegisterComponent },
{ path: 'login', component: LoginComponent },
{ path: 'addlist', component: AddlistComponent },
{ path: 'listing', component: ListingComponent },
{path: 'userdashdetail', component: UserdashdetailComponent },
{path: 'admindashdetail', component: AdmindashdetailComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
