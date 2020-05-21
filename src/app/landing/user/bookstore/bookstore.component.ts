import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {UserStateService} from '../user.state.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bookstore',
  templateUrl: './bookstore.component.html',
  styleUrls: ['./bookstore.component.css', '../../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class BookstoreComponent implements OnInit {
  books: any;

  constructor(private service: UserService, private state: UserStateService, private route: Router) {
  }

  ngOnInit(): void {
    this.getBooks();
  }

  private getBooks() {
    this.service.getStore().subscribe(res => {
      this.books = res;
    });
  }

  nav(id) {
    localStorage.setItem('book', id);
    this.route.navigate(['./user/books']);
  }
}
