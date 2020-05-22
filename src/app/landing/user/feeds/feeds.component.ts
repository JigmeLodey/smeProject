import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserStateService} from '../user.state.service';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css', '../../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class FeedsComponent implements OnInit {
  user: any;
  id: any;
  public show = false;
  bgcolor: string;
  books: any;
  books2: any;
  books3: any;
  post: any;
  formTA: FormGroup;

  constructor(private service: UserService, private route: Router, private fb: FormBuilder, private state: UserStateService) {
  }

  ngOnInit(): void {
    this.getUser();
    this.background();
    this.getBook();
    this.getPost();
    this.formBuilder();
  }

  private getUser() {
    this.service.getUser(localStorage.getItem('auth')).subscribe(res => {
      this.user = res;
    });
  }

  color() {
    this.show = !this.show;
    if (this.show) {
      localStorage.setItem('color', 'true');
      this.id = true;
    } else {
      localStorage.setItem('color', '!true');
      this.id = false;
    }
  }

  private background() {
    this.bgcolor = localStorage.getItem('color');
    if (this.bgcolor === 'true') {
      this.id = true;
    } else {
      this.id = false;
    }
  }

  goto(value: string) {
    if (value === 'BRoll') {
      this.route.navigate(['./user/bookroll']);
    } else if (value === 'Bdonate') {
      this.route.navigate(['./user/bookdonation']);
    } else {
      this.route.navigate(['./user/donation']);
    }
  }

  private getBook() {
    this.service.getStore().subscribe(res => {
      const length = Object.keys(res).length;
      this.books2 = res[length - 1];
      this.books3 = res[length - 2];
      this.books = res[length - 3];
    });
  }

  private getPost() {
    this.service.getPost().subscribe((res: []) => {
      this.post = res.reverse();
    });
  }

  private formBuilder() {
    this.formTA = this.fb.group({
      feed: [undefined, Validators.required],
      userName: [undefined],
      gender: [undefined],
      userId: [undefined]

    });
  }

  send() {
    if (this.formTA.valid) {
      this.formTA.value.userName = this.user.name;
      this.formTA.value.gender = this.user.gender;
      this.formTA.value.userId = this.user.id;
      this.service.addPost(this.formTA.value).subscribe(res => {
        if (res) {
          this.formTA.reset();
        }
      });
    }
  }

  nav(id: any) {
    this.route.navigate(['./user/pro']);
    this.state.bookId(id);
  }
}
