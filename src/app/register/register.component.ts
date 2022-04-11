import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {
    id: '',
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    type: '',
  };

  constructor(private apolloClient: Apollo,
    private dataService: DataService,) { }

  ngOnInit(): void {
  }



  addUser(form: NgForm) {
    console.log(form.value);
    this.apolloClient
      .mutate({
        mutation: this.dataService.ADD_NEW_USER,
        variables: {
          username: form.value.username,
          firstname: form.value.firstname,
          lastname: form.value.lastname,
          email: form.value.email,
          password: form.value.password,
        },
      })
      .subscribe(
        (response) => {
          console.log(response);

          setTimeout(() => {
            window.location.href = '/';
          }, 2000);
        },
        (err) => {

          console.log(err);
        }
      );
  }
}
