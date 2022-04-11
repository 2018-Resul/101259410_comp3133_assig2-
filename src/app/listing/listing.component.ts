import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  allListing:any=[];



  constructor(private apolloClient: Apollo, private dataService: DataService) {

    this.getAllListing()
  }


  ngOnInit(): void {
  }

  getAllListing() {
    this.apolloClient
      .watchQuery<any>({
        query: this.dataService.GET_ALL_LISTING,
      })
      .valueChanges.subscribe((response) => {
        console.log(response.data.getListing)
        this.allListing = response.data.getListing;
      });
  }




  book(data: any) {
    console.log(data);
    this.apolloClient
      .mutate({
        mutation: this.dataService.ADD_BOOKIN_BY_USER,
        variables: {
          username: JSON.parse(localStorage.getItem('login') || '{}').username,
          listing_id:data.listing_id,
          booking_id: '_' + Math.random().toString(36).substr(2, 9),
          booking_start: new Date,
          booking_end: new Date,
          booking_date: new Date,
        },
      })
      .subscribe((response) => {
        console.log(response);
        setTimeout(() => {
          window.location.href = '/';
        }, 1000);
      },
      (err) => {
        console.log(err);
      });


  }

}
