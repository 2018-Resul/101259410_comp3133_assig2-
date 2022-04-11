import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-userdash',
  templateUrl: './userdash.component.html',
  styleUrls: ['./userdash.component.css']
})
export class UserdashComponent implements OnInit {
  myBooking:any=[];

  constructor(private apolloClient: Apollo, private dataService: DataService) {
    this.getAllBooking()
   }

  ngOnInit(): void {
  }



  getAllBooking() {
    this.apolloClient
    .watchQuery<any>({
      query: this.dataService.GET_ALL_BOOKING_BY_USERNAME,
      variables: {
        username: JSON.parse(localStorage.getItem('login') || '{}').username,
      },
    })
    .valueChanges.subscribe((response) => {
      console.log('all booking by username');
      console.log(response.data.getBookingByuser);
      this.myBooking = response.data.getBookingByuser;
    });
  }



}
