import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public GET_USERS = gql`
  {
    getUser {
      id
      username
      firstname
      lastname
      email
      password
      token
      type
    }
  }
`;

public GET_ALL_LISTING = gql`
{
  getListing {
    id
    listing_id
    listing_title
    description
    street
    city
    postal_code
    price
    email
    username
    type

  }
}
`;

public GET_ALL_BOOKING = gql`
{
  getBooking {
    listing_id
    booking_id
    booking_date
    booking_start
    booking_end
    username
  }
}
`;

public GET_ALL_BOOKING_BY_USERNAME = gql`
query getBookingByuser($username: String!) {
  getBookingByuser(username: $username) {
    listing_id
    booking_id
    booking_date
    booking_start
    booking_end
    username
  }
}
`;

public ADD_BOOKIN_BY_USER = gql`
mutation addBooking(
  $listing_id: String!
  $booking_id: String!
  $booking_date: String!
  $booking_start: String!
  $booking_end: String!
  $username: String!
) {
  addBooking(
    listing_id: $listing_id
    booking_id: $booking_id
    booking_date: $booking_date
    booking_start: $booking_start
    booking_end: $booking_end
    username: $username
  ) {
    listing_id
    booking_id
    booking_date
    booking_start
    booking_end
    username
  }
}
`;


public ADD_NEW_USER = gql`
mutation addUser(
  $username: String!
  $firstname: String!
  $lastname: String!
  $email: String!
  $password: String!
) {
  addUser(
    username: $username
    firstname: $firstname
    lastname: $lastname
    email: $email
    password: $password
  ) {
    id
    username
    firstname
    lastname
    email
    password
  }
}
`;

public ADD_NEWLISTING = gql`
    mutation addListing(
      $listing_id: String!
      $listing_title: String!
      $description: String!
      $street: String!
      $city: String!
      $postal_code: String!
      $price: String!
      $email: String!
      $username: String!
      $type: String
    ) {
      addListing(
        listing_id: $listing_id
        listing_title: $listing_title
        description: $description
        street: $street
        city: $city
        postal_code: $postal_code
        price: $price
        email: $email
        username: $username
        type: $type
      ) {
        listing_id
        listing_title
        description
        street
        city
        postal_code
        price
        email
        username
        type
      }
    }
  `;


}
