import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private apolloClient: Apollo, private dataService: DataService) {
    this.getUsers()
   }
  model: any = {
    username: '',
    password: ''
  };

  allUsers:any=[];
  loggedInUser:any=[];

  ngOnInit(): void {
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


  loggedUser(form:NgForm){

    this.loggedInUser = this.allUsers
      .map((el: any) => el)
      .filter((ele: any) => ele.username == this.model.username);

      this.loggedInUser=this.loggedInUser[0]

      if (
        this.loggedInUser.username &&
        this.loggedInUser.password == this.model.password
      ) {

        const user = {
          username: this.loggedInUser.username,
          type: this.loggedInUser.type,
          id: this.loggedInUser.id,
        };

        localStorage.setItem('login', JSON.stringify(user));
        setTimeout(() => {
          window.location.href = '/';
        }, 2000);
  }}

}
