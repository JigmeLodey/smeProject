import {Component, OnInit} from '@angular/core';
import {Form, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import {NotifierService} from 'angular-notifier';

interface Book {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-bookdonation',
  templateUrl: './bookdonation.component.html',
  styleUrls: ['./bookdonation.component.css', '../../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class BookdonationComponent implements OnInit {
  thirdFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  firstFormGroup: FormGroup;
  isLinear = false;
  book: Book[] = [
    {value: 'Action', viewValue: 'Action'},
    {value: 'Horror', viewValue: 'Horror'},
    {value: 'Romance', viewValue: 'Romance'},
    {value: 'Science Fiction', viewValue: 'Science Fiction'},
    {value: 'Other', viewValue: 'Other'}
  ];
  private readonly notifier: NotifierService;

  constructor(private formBuilder: FormBuilder, private service: UserService, private notifierService: NotifierService) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    this.stepOne();
    this.stepTwo();
    this.stepThree();
  }

  feedback() {
    if (this.thirdFormGroup.valid) {
      this.service.postUserFeedback(this.thirdFormGroup.value).subscribe(res => {
        if (res) {
          this.notifier.notify('success', 'Success');
        } else {
          this.notifier.notify('error', 'Failed');
        }
      });
    }

  }

  onRequest() {
    if (this.secondFormGroup.valid) {
      this.service.onRequestDonation(this.secondFormGroup.value).subscribe(res => {
        if (res) {
          this.notifier.notify('success', 'Success');
        } else {
          this.notifier.notify('error', 'sorry failed');
        }
      });
    }
  }

  initiateDonation() {
    if (this.firstFormGroup.valid) {
      this.firstFormGroup.value.uid = localStorage.getItem('auth');
      this.service.postBook(this.firstFormGroup.value).subscribe(res => {
        if (res) {
          this.notifier.notify('success', 'Success');
        } else {
          this.notifier.notify('error', 'Error');
        }
      });
    }
  }

  private stepOne() {
    this.firstFormGroup = this.formBuilder.group({
      author: [undefined, Validators.required],
      name: [undefined, Validators.required],
      type: [undefined, Validators.required],
      uid: [undefined]
    });

  }

  private stepTwo() {
    this.secondFormGroup = this.formBuilder.group({
      author: [undefined, Validators.required],
      bookname: [undefined, Validators.required],
      booktype: [undefined, Validators.required],
      username: [undefined, Validators.required],
      email: [undefined, Validators.required],
      phone: [undefined, Validators.required]
    });

  }

  private stepThree() {
    this.thirdFormGroup = this.formBuilder.group({
      message: [undefined, Validators.required]
    });
  }
}
