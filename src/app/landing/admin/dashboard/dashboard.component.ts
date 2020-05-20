import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Route, Router} from '@angular/router';
import {AdminService} from '../admin.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', '../../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class DashboardComponent implements OnInit {
  single: any[] = [];
  books: any[] = [];
  showFiller = true;
  value: any;
  book: any;
  user: any;
  contact: any;
  subscribe: any;
  userLength: number;
  contactLength: number;
  postLength: number;
  subscribeLength: number;

  constructor(private route: Router, public service: AdminService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.donationGraph();
    this.bookGraph();
    this.getUser();
    this.getSubscribes();
    this.getContact();
    this.getPost();
  }

  donationGraph(): void {
    this.service.onRequest().subscribe(res => {
      this.value = res;
      this.single = this.value;
    });
  }

  bookGraph(): void {
    this.service.getBooks().subscribe(res => {
      this.book = res;
      this.books = this.book;
    });
  }

  getUser(): void {
    this.service.getUser().subscribe(res => {
      this.user = res;
      this.userLength = Object.keys(res).length;
    });
  }

  getSubscribes(): void {
    this.service.getSubscribe().subscribe(res => {
      this.subscribe = res;
      this.subscribeLength = Object.keys(res).length;
    });
  }

  getPost(): void {
    this.service.getUserFeedback().subscribe(res => {
      this.postLength = Object.keys(res).length;
    });
  }

  getContact(): void {
    this.service.getContact().subscribe(res => {
      this.contact = res;
      this.contactLength = Object.keys(res).length;
    });
  }

  nav(value: string) {
    if (value === 'user') {
      this.route.navigate(['admin/user']);
    } else if (value === 'post') {
      this.route.navigate(['./admin/post']);
    } else {
      this.route.navigate(['./admin']);
    }
  }
}

