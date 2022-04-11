import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userRole: any = JSON.parse(localStorage.getItem('login') || '{}').type;
  constructor() { }

  ngOnInit(): void {
  }


  adminLogin(): boolean {
    if (this.userRole == 'admin') {
      return true;
    }
    return false;
  }

  userLogin(): boolean {
    if (this.userRole == 'customer') {
      return true;
    }
    return false;
  }

  logout(){
    localStorage.removeItem('login')
  }

}
