import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-bookstore',
  templateUrl: './bookstore.component.html',
  styleUrls: ['./bookstore.component.css', '../../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class BookstoreComponent implements OnInit {
  books: any;

  constructor(private service: UserService) {
  }

  ngOnInit(): void {
    this.getBooks();
  }

  private getBooks() {
    this.service.getStore().subscribe(res => {
      this.books = res;
    });
  }
}
