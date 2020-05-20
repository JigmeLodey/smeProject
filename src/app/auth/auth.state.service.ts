import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthState {
  private auth = new Subject();

  constructor() {
  }

  authChecker() {
    return !!localStorage.getItem('auth');
  }

}
