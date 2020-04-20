import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AdminService} from '../../admin.service';
import {EditUserStateService} from './edit-user.state.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ENABLE_DISABLE_REGEX} from 'tslint';
import {UserListStateService} from '../user-list.state.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css', '../../../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class EditUserComponent implements OnInit {
  editeUserForm: FormGroup;
  id: any;
  user: any;
  disable = true;

  constructor(private formBuilder: FormBuilder,
              private service: AdminService,
              private state: UserListStateService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    this.editFormBuilder();
    this.getUserValue();
  }

  getUserValue() {
    this.getUser(this.data);
  }

  getUser(id) {
    this.service.getUserByID(id).subscribe(res => {
      this.user = res;
      this.editeUserForm.controls.name.setValue(this.user.name);
      this.editeUserForm.controls.email.setValue(this.user.email);
      this.editeUserForm.controls.number.setValue(this.user.number);
      this.editeUserForm.controls.role.setValue(this.user.role);
      this.editeUserForm.controls.gender.setValue(this.user.gender);
      this.editeUserForm.controls.status.setValue(this.user.status);
    });
  }

  editFormBuilder() {
    this.editeUserForm = this.formBuilder.group({
      name: [undefined],
      email: [undefined],
      number: [undefined],
      role: [undefined],
      gender: [undefined],
      status: [undefined]
    });
  }

  onSave() {
    this.service.onUpdate(this.data, this.editeUserForm.value).subscribe(res => {
      if (res) {
        this.state.updatteUser(this.editeUserForm.value);
        this.close();
      }
    });
    this.state.updatteUser(this.editeUserForm.value);
  }

  private close() {

  }
}
