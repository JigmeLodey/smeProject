import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DesktopService {

  constructor(private http: HttpClient) {
  }

  postContact(value) {
    return this.http.post(' http://localhost:3000/contact', value);
  }
}
