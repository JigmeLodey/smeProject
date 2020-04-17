import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserListStateService {
  private userValue = new Subject();

  constructor() {
  }

  updatetotalUser(total) {
    return this.userValue.next(total);
  }
  get totalUsers() {
    return this.userValue.asObservable();
  }
}
