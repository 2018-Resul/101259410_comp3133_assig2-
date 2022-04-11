import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-addlist',
  templateUrl: './addlist.component.html',
  styleUrls: ['./addlist.component.css']
})
export class AddlistComponent implements OnInit {

  model: any = {
    sting_id: '',
    listing_title:'',
    description: '',
    street: '',
    city: '',
    postal_code: '',
    price: '',
    email: '',
    username:JSON.parse(localStorage.getItem('login') || '{}').username,
    type: JSON.parse(localStorage.getItem('login') || '{}').type
  };

  adminLoggedIn =JSON.parse(localStorage.getItem('login') || '{}').username

  constructor(private apolloClient: Apollo,
    private dataService: DataService,) { }

  ngOnInit(): void {
  }

addNewListing(model: any) {

  console.log("----------------------")
  console.log(model.value)
  console.log("-----------------")

if(this.adminLoggedIn=="admin"){
  this.apolloClient
  .mutate({
    mutation: this.dataService.ADD_NEWLISTING,
    variables: {
      listing_id: model.value.listing_id,
      listing_title: model.value.listing_title,
      description: model.value.description,
      street: model.value.street,
      city: model.value.city,
      postal_code: model.value.postal_code,
      price: model.value.price,
      email: model.value.email,
      username:model.value.username ,
      type: model.value.type,

    },
  })
  .subscribe(
    (response) => {
      console.log(response);

      setTimeout(() => {
        window.location.href = '/';
      }, 1000);
    },
    (err) => {
      console.log(err);
    }
  );
}else{
  alert("You are not admin")
  window.location.href="/"
}


  }

}
