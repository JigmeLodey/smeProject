import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AdminService} from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css', '../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class AdminComponent implements OnInit {
  showFiller = true;
  showLeft = false;
  genders: any;

  constructor(private route: Router, private service: AdminService) { }

  ngOnInit(): void {
   this.checker();
  }

  menu() {
    this.showLeft = this.showLeft !== true;
  }
  nav(value: string) {
    if (value === 'dashboard') {
      this.route.navigate(['./admin']);
    } else if (value === 'feed') {
      this.route.navigate(['./admin/feeds']);
    } else if (value === 'users') {
      this.route.navigate(['./admin/user']);
    } else if (value === 'post') {
      this.route.navigate(['./admin/post']);
    } else if (value === 'addBook') {
      this.route.navigate(['./admin/store']);
    } else if (value === 'bookRoll') {
      this.route.navigate(['./admin/bookroll']);
    } else if (value === 'bookDonate') {
      this.route.navigate(['./admin/bookdonation']);
    } else if (value === 'addDonation') {
      this.route.navigate(['./admin/donation']);
    } else {
      this.route.navigate(['./admin/donation']);
    }
  }

  onLogout() {
    localStorage.clear();
    this.route.navigate(['./']);
  }

  private checker() {
    const id = localStorage.getItem('auth');
    this.service.getUserByID(id).subscribe(res => {
      this.genders = res;
    });
  }
}
