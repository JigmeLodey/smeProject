import {Component, OnInit} from '@angular/core';
import {AdminService} from '../admin.service';

@Component({
  selector: 'app-admin-feeds',
  templateUrl: './admin-feeds.component.html',
  styleUrls: ['./admin-feeds.component.css', '../../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class AdminFeedsComponent implements OnInit {
  feeds: any;
  genderChecker: boolean;

  constructor(private service: AdminService) {
  }

  ngOnInit(): void {
    this.getFeed();
    this.getAmin();
  }

  private getFeed() {
    this.service.getPost().subscribe(res => {
      this.feeds = res;
    });
  }

  private getAmin() {

  }
}
