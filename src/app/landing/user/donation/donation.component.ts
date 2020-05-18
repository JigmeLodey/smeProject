import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import {NotifierService} from 'angular-notifier';


interface Donations {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css',  '../../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class DonationComponent implements OnInit {
  thirdFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  donation: Donations[] = [
    {value: 'Foot-ware', viewValue: 'Foot-ware'},
    {value: 'Clouts', viewValue: 'Clouts'},
    {value: 'Electronic', viewValue: 'Electronic'},
    {value: 'Other', viewValue: 'Other'}
  ];
  isLinear = false;
  firstFormGroup: FormGroup;
  private notifier: NotifierService;
  constructor(private formBuilder: FormBuilder, private service: UserService, private notifierService: NotifierService) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    this.firstFormBuild();
    this.secondStep();
    this.thirdStep();
  }

  onRequest() {

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

  initiateDonation() {

  }

  private firstFormBuild() {
    this.firstFormGroup = this.formBuilder.group({
      name: [undefined, Validators.required],
      email: [undefined, Validators.required],
      phone: [undefined, Validators.required],
      type: [undefined, Validators.required],
      addInfo: [undefined],
    });
  }
  private secondStep() {
    this.secondFormGroup = this.formBuilder.group({
      info: ['', Validators.required],
      place: ['', Validators.required],
      type: [undefined, Validators.required],
      name: [undefined, Validators.required],
      email: [undefined, Validators.required],
      phone: [undefined, Validators.required]
    });
  }

  private thirdStep() {
    this.thirdFormGroup = this.formBuilder.group({
      feedback: [undefined]
    });
  }
}
