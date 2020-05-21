import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {
  private userValue = new BehaviorSubject(0);

  constructor() {
  }

  bookId(id) {
    return this.userValue.next(id);
  }
  get bookID() {
    return this.userValue.asObservable();
  }

}
