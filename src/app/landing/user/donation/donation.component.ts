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
  styleUrls: ['./donation.component.css', '../../../../../node_modules/bootstrap/dist/css/bootstrap.css']
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
  private donationValue: any;
  footware: number;
  clouts: number;
  electronic: number;
  other: number;

  constructor(private formBuilder: FormBuilder, private service: UserService, private notifierService: NotifierService) {
    this.notifier = notifierService;

  }

  ngOnInit(): void {
    this.firstFormBuild();
    this.secondStep();
    this.thirdStep();
  }

  onRequest() {
    if (this.secondFormGroup.valid) {
      this.service.donationAsked(this.secondFormGroup.value).subscribe(res => {
        if (res) {
          this.notifier.notify('siccess', 'Success');
        } else {
          this.notifier.notify('error', 'Error Value');
        }
      });
    }

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

  initiateDonation() {
    this.service.getDonationRequest().subscribe(res => {
      this.donationValue = res;
      this.footware = res[0].value;
      this.clouts = res[1].value;
      this.electronic = res[2].value;
      this.other = res[3].value;
      if (this.firstFormGroup.valid) {
        const value = this.firstFormGroup.value.type;
        if (value === 'Foot-ware') {
          this.footware = this.footware + 1;
          this.service.onUpdateChart({name: 'Footwares', id: 1, value: this.footware}, 1).subscribe(response => response);
        } else if (value === 'Clouts') {
          this.clouts = this.clouts + 1;
          this.service.onUpdateChart({name: 'Clouts', id: 2, value: this.clouts}, 2).subscribe(response => response);
        } else if (value === 'Electronic') {
          this.electronic = this.electronic + 1;
          this.service.onUpdateChart({name: 'Electronic', id: 3, value: this.electronic}, 3).subscribe(response => response);
        } else {
          this.other = this.other + 1;
          this.service.onUpdateChart({name: 'Other', id: 4, value: this.other}, 4).subscribe(response => response);
        }
      }
    });

    if (this.firstFormGroup.valid) {
      this.service.postDonationValue(this.firstFormGroup.value).subscribe(res => {
        if (res) {
          this.notifier.notify('success', 'Success');
        } else {
          this.notifier.notify('error', 'Error');
        }
      });
    }
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
      addInfo: ['', Validators.required],
      place: ['', Validators.required],
      type: [undefined, Validators.required],
      name: [undefined, Validators.required],
      email: [undefined, Validators.required],
      phone: [undefined, Validators.required]
    });
  }

  private thirdStep() {
    this.thirdFormGroup = this.formBuilder.group({
      message: [undefined]
    });
  }
}
