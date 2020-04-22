import {Component, OnInit} from '@angular/core';
import {AdminService} from '../admin.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ArrayDataSource} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-admin-feeds',
  templateUrl: './admin-feeds.component.html',
  styleUrls: ['./admin-feeds.component.css', '../../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class AdminFeedsComponent implements OnInit {
  feeds: any;
  adminDetails: any;
  postForm: FormGroup;

  constructor(private service: AdminService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.getFeed();
    this.getAmin();
    this.buildForm();
  }

  private getFeed() {
    this.service.getPost().subscribe((res: []) => {
      this.feeds = res.reverse();
    });
  }

  private getAmin() {
    const id = localStorage.getItem('auth');
    this.service.getUserByID(id).subscribe(res => {
      this.adminDetails = res;
    });
  }

  private buildForm() {
    this.postForm = this.formBuilder.group({
      feed: [undefined],
      userId: [undefined],
      userName: [undefined],
      gender: [undefined],
    });
  }

  onPost() {
    if (this.postForm.value.feed !== null) {
      this.postForm.value.userId = localStorage.getItem('auth');
      this.postForm.value.gender = this.adminDetails.gender;
      this.postForm.value.userName = this.adminDetails.name;
      this.service.addPost(this.postForm.value).subscribe(res => {
        if (res) {
          this.feeds.push(res);
          this.postForm.reset();
        }
      });
    }
  }
}
