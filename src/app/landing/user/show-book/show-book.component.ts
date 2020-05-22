import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {UserStateService} from '../user.state.service';
import {filter, switchMap, tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-show-book',
  templateUrl: './show-book.component.html',
  styleUrls: ['./show-book.component.css', '../../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class ShowBookComponent implements OnInit {
  public Id: any;
   book: any;

  constructor(private service: UserService, private state: UserStateService, private route: Router) {
  }

  ngOnInit(): void {
    this.getBook();

  }

  back() {
    this.route.navigate(['./user']);
    localStorage.removeItem('book');
  }

  private getBook() {
    this.service.getBookById(localStorage.getItem('book')).subscribe(res => {
      this.book = res;
    });
  }
}
