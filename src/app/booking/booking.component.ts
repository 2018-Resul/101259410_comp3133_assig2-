import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  allBooking:any=[];



  constructor(private apolloClient: Apollo, private dataService: DataService) {

    this.getAllBooking()
  }

  ngOnInit(): void {
  }

  getAllBooking() {
    this.apolloClient
      .watchQuery<any>({
        query: this.dataService.GET_ALL_BOOKING,
      })
      .valueChanges.subscribe((response) => {
        this.allBooking = response.data.getBooking;
      });
  }

}
