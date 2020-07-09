import {Component, OnInit} from '@angular/core';
import {Router, Routes} from '@angular/router';
import {UserService} from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css', '../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class UserComponent implements OnInit {
  sex: any;
  private gen: any;
  books: any;

  constructor(private route: Router, private service: UserService) {
  }

  ngOnInit(): void {
    this.getUser();
    this.getBook();
  }

  getUser() {
    this.service.getUser(localStorage.getItem('auth')).subscribe(gender => {
      this.gen = gender;
      this.sex = this.gen.gender;
    });
  }

  nav(value) {
    if (value === 'dashboard') {
      this.route.navigate(['./user']);
    } else if ( value === 'profile') {
      this.route.navigate(['./user/profile']);
    } else if (value === 'feed') {
      this.route.navigate(['./user/feed']);
    } else if (value === 'donation') {
      this.route.navigate(['./user/donation']);
    }  else if (value === 'roll') {
      this.route.navigate(['./user/bookroll']);
    } else {
      this.route.navigate(['./user/bookdonation']);
    }
  }

   getBook() {
    this.service.getStore().subscribe(req => {
      this.books = req;
    });
  }
}
