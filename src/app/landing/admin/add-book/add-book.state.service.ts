import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AddBookStateService {
  private userValue = new Subject();
  constructor() {
  }

  updateBook(value) {
    return this.userValue.next(value);
  }
  get showBook() {
    return this.userValue.asObservable();
  }
}
