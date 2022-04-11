import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  allUsers:any=[];
  allListing:any=[];



  constructor(private apolloClient: Apollo, private dataService: DataService) {
    this.getUsers()
  }




  getUsers() {
    this.apolloClient
      .watchQuery<any>({
        query: this.dataService.GET_USERS,
      })
      .valueChanges.subscribe((response) => {
       this.allUsers = response.data.getUser;
      });
  }


  ngOnInit(): void {
  }

}
