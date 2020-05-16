import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../../../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router) {
  }

  ngOnInit(): void {
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
}
