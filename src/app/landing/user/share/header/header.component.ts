import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../../../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class HeaderComponent implements OnInit {
  female = true;
  gender: any;

  constructor(private route: Router, private service: UserService) {
  }

  ngOnInit(): void {
    this.getProfile();
  }

  nav(value: string) {
    if (value === 'home') {
      this.route.navigate(['./user']);
    } else if (value === 'profile') {
      this.route.navigate(['./user/profile']);
    } else if (value === 'feed') {
      this.route.navigate(['./user/feed']);
    } else {
      if (value === 'bd') {
        this.route.navigate(['./user/bookdonation']);
      } else if (value === 'rb') {
        this.route.navigate(['./user/bookroll']);
      } else {
        this.route.navigate(['./user/donation']);
      }
    }
  }

  private getProfile() {
    this.service.getUser(localStorage.getItem('auth')).subscribe(res => {
      this.gender = res;
      if (this.gender.gender === 'Male') {
        this.female = false;
      } else {
        this.female = true;
      }
    });
  }

  onLogout() {
    localStorage.clear();
    this.route.navigate(['']);
  }
}
