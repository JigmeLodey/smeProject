import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EditUserStateService {
  private userValue = new Subject();
  constructor() {
  }

  updatetotalUser(total) {
    console.log('state' +  total)
    return this.userValue.next(total);
  }
  get totalUsers() {
    return this.userValue.asObservable();
  }
}
