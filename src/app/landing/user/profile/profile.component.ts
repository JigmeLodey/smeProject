import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css', '../../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  picChecker = false;
  address: false;
  about = false;
  edit = false;
  personalForm: FormGroup;

  constructor(private service: UserService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.getUserDetails();
    this.formBuild();
  }

  private formBuild() {
    this.personalForm = this.formBuilder.group({
      name: [undefined, Validators.required],
      gender: [undefined, Validators.required],
      number: [undefined, Validators.required],
      email: [undefined],
      role: [undefined],
      status: [undefined],
      password: [undefined],
      city: [undefined],
      street: [undefined],
      state: [undefined],
      about: [undefined]

    });
  }

  private getUserDetails() {
    this.service.getUser(localStorage.getItem('auth')).subscribe(res => {
      this.user = res;
      this.personalForm.controls.name.setValue(this.user.name);
      this.personalForm.controls.gender.setValue(this.user.gender);
      this.personalForm.controls.email.setValue(this.user.email);
      this.personalForm.controls.number.setValue(this.user.number);
      this.personalForm.controls.role.setValue(this.user.role);
      this.personalForm.controls.status.setValue(this.user.status);
      this.personalForm.controls.password.setValue(this.user.password);
      this.personalForm.controls.city.setValue(this.user.city);
      this.personalForm.controls.street.setValue(this.user.street);
      this.personalForm.controls.state.setValue(this.user.state);
      this.personalForm.controls.about.setValue(this.user.about);
    });
  }

  onEdit() {
    this.edit = true;
  }

  onSave() {
    this.edit = false;
    this.service.editUser(localStorage.getItem('auth'), this.personalForm.value).subscribe(res => res);

  }

  onCancel() {
    this.edit = false;
  }
}
