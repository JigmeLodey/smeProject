import {Component, OnInit} from '@angular/core';
import {UserStateService} from '../user.state.service';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-other-profile',
  templateUrl: './other-profile.component.html',
  styleUrls: ['./other-profile.component.css', '../../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class OtherProfileComponent implements OnInit {
  user: number;
  profile: any;

  constructor(private state: UserStateService, private service: UserService, private route: Router) {
  }

  ngOnInit(): void {
    this.getId();
  }

  private getId() {
    this.state.bookID.subscribe(res => {
      this.user = res;
    });
    this.service.getUser(this.user).subscribe(res => {
      this.profile = res;
    });
  }

  back() {
    this.route.navigate(['./user/feed']);
  }
}
