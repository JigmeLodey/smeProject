import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  onRequest() {
    return this.http.get('http://localhost:3000/donation');
  }

  addBook(value) {
    return this.http.post('http://localhost:3000/bookStore', value);
  }

  postBook(value) {
    return this.http.post('http://localhost:3000/usersDonations', value);
  }

  onPostBook(value, id) {
    return this.http.put(`http://localhost:3000/books/${id}`, value);
  }

  onDeleteBook(id) {
    return this.http.delete(`http://localhost:3000/bookStore/${id}`);
  }

  getUser(id) {
    return this.http.get(`http://localhost:3000/auth/${id}`);
  }
  editUser(id, value) {
    return this.http.put(`http://localhost:3000/auth/${id}`, value);
  }

  onRequestDonation(value) {
    return this.http.post(' http://localhost:3000/bdonate', value);
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

  postUserBookRoll(value: any) {
    return this.http.post('http://localhost:3000/usersBookRoll', value);
  }


  onSendRoll(value: any) {
    return this.http.post('http://localhost:3000/broll', value);
  }

  onDeleteUserDonation(id) {
    return this.http.delete(`http://localhost:3000/usersDonations/${id}`);
  }

  postUserFeedback(value) {
    return this.http.post('http://localhost:3000/feedback', value);
  }
}