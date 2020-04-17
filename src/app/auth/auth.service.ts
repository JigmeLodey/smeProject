import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  getAuth() {
    return this.http.get(' http://localhost:3000/auth');
  }
  onPostSignUp(value) {
    return this.http.post('http://localhost:3000/auth', value).pipe();
  }
  onRequest(value) {
    return this.http.post('http://localhost:3000/request', value);
  }
}
