import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import {NotifierService} from 'angular-notifier';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-book-roll',
  templateUrl: './book-roll.component.html',
  styleUrls: ['./book-roll.component.css', '../../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class BookRollComponent implements OnInit {
  isLinear = false;
  foods: Food[] = [
    {value: 'Action', viewValue: 'Action'},
    {value: 'Horror', viewValue: 'Horror'},
    {value: 'Romance', viewValue: 'Romance'},
    {value: 'Science Fiction', viewValue: 'Science Fiction'},
    {value: 'Other', viewValue: 'Other'}
  ];
  private readonly notifier: NotifierService;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: UserService, private notifierService: NotifierService,) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    this.firstStep();
    this.secondStep();
    this.third();
  }


  private firstStep() {
    this.firstFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      author: ['', Validators.required],
      type: [undefined, Validators.required],
      uid: [undefined]

    });
  }

  private secondStep() {
    this.secondFormGroup = this.formBuilder.group({
      bookname: ['', Validators.required],
      author: ['', Validators.required],
      booktype: [undefined, Validators.required],
      username: [undefined, Validators.required],
      email: [undefined, Validators.required],
      phone: [undefined, Validators.required]
    });
  }

  initiateRoll() {
    if (this.firstFormGroup.valid) {
      this.firstFormGroup.value.uid = localStorage.getItem('auth');
      this.service.postUserBookRoll(this.firstFormGroup.value).subscribe(res => {
        if (res) {
          this.notifier.notify('success', 'Sent');
        } else {
          this.notifier.notify('error', 'Send Failed');

        }
      });
    }
  }

  onRequest() {
    if (this.secondFormGroup.valid) {
      this.service.onSendRoll(this.secondFormGroup.value).subscribe(res => {
        if (res) {
          this.notifier.notify('success', 'Success');
        } else {
          this.notifier.notify('error', 'sorry failed');
        }
      });
    }

  }

  private third() {
    this.thirdFormGroup = this.formBuilder.group({
      feedback: [undefined, Validators.required]
    });
  }

  feedback() {
    if (this.thirdFormGroup.valid){
      this.service.postUserFeedback(this.thirdFormGroup.value).subscribe(res => {
        if (res) {
          this.notifier.notify('success', 'Success');
        } else {
          this.notifier.notify('error', 'Failed' );
        }
      })
    }
  }
}
