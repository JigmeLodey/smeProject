import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) {
  }

  onRequest() {
    return this.http.get('http://localhost:3000/donation');
  }

  addBook(value) {
    return this.http.post('http://localhost:3000/bookStore', value);
  }

  getBooks() {
    return this.http.get('http://localhost:3000/books');
  }

  onPostBook(value, id) {
    return this.http.put(`http://localhost:3000/books/${id}`, value);
  }

  onDeleteBook(id) {
    return this.http.delete(`http://localhost:3000/bookStore/${id}`);
  }

  getUser() {
    return this.http.get(' http://localhost:3000/auth');
  }

  getSubscribe() {
    return this.http.get(' http://localhost:3000/subscribe');
  }

  getContact() {
    return this.http.get('  http://localhost:3000/contact');
  }

  addUser(value: any) {
    return this.http.post(' http://localhost:3000/auth', value);
  }

  getPost() {
    return this.http.get(` http://localhost:3000/post`);
  }

  getEmail() {
    return this.http.get('http://localhost:3000/request');
  }

  onDelete(id) {
    return this.http.delete(` http://localhost:3000/auth/${id}`);
  }

  onDeleteSub(id: number) {
    return this.http.delete(`http://localhost:3000/subscribe/${id}`);
  }

  onDeleteRes(id: number) {
    return this.http.delete(`http://localhost:3000/request/${id}`);
  }

  getUserByID(id) {
    return this.http.get(`http://localhost:3000/auth/${id}`);
  }

  onUpdate(id, value: any) {
    return this.http.put(`http://localhost:3000/auth/${id}`, value);
  }

  getStore() {
    return this.http.get(' http://localhost:3000/bookStore');
  }

  addPost(value) {
    return this.http.post('http://localhost:3000/post', value);
  }
  getUserDonatedBooks() {
    return this.http.get('http://localhost:3000/usersBookDonate');
  }
  onDeleteUserDonateBook(id) {
    return this.http.delete(`http://localhost:3000/usersBookDonate/${id}`);
  }
  getUserBookRoll() {
    return this.http.get('http://localhost:3000/usersBookRoll');
  }
  onDeleteUserBookRoll(id) {
    return this.http.delete(`http://localhost:3000/usersBookRoll/${id}`);
  }
  getUserDonatio() {
    return this.http.get('http://localhost:3000/usersDonations');
  }
  onDeleteUserDonation(id) {
    return this.http.delete(`http://localhost:3000/usersDonations/${id}`);
  }
  getUserFeedback() {
    return this.http.get('http://localhost:3000/feedback');
  }
  getRequest() {
    return this.http.get('http://localhost:3000/broll');
  }
  getRequestDelete(id) {
    return this.http.delete(`http://localhost:3000/broll/${id}`);
  }
  getUserDonationRequest() {
    return this.http.get('http://localhost:3000/usersDonationsRequest');
  }
  onDeleteDonationRequest(id) {
    return this.http.delete(`http://localhost:3000/usersDonationsRequest/${id}`);
  }
}
