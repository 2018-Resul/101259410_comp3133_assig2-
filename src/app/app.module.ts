import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { AddlistComponent } from './addlist/addlist.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { UserdashComponent } from './userdash/userdash.component';
import { UserdashdetailComponent } from './userdashdetail/userdashdetail.component';
import { AdmindashdetailComponent } from './admindashdetail/admindashdetail.component';
import { ListingComponent } from './listing/listing.component';
import { BookingComponent } from './booking/booking.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    AddlistComponent,
    AdmindashComponent,
    UserdashComponent,
    UserdashdetailComponent,
    AdmindashdetailComponent,
    ListingComponent,
    BookingComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({

            uri: 'http://localhost:5000/graphql',

          }),
        };
      },
      deps: [HttpLink],
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
