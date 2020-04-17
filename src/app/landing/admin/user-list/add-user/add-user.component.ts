import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AdminService} from '../../admin.service';
import {NotifierService} from 'angular-notifier';
import {MatDialogRef} from '@angular/material/dialog';
import {UserListStateService} from '../user-list.state.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css', '../../../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class AddUserComponent implements OnInit {
  addUserForm: FormGroup;
  private readonly notifier: NotifierService;
  len: number;
  checker = false;

  constructor(private formBuilder: FormBuilder,
              private service: AdminService,
              private notifierService: NotifierService,
              private dialogRef: MatDialogRef<AddUserComponent>,
              private state: UserListStateService) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    this.userFormBuilder();
  }

  userFormBuilder() {
    this.addUserForm = this.formBuilder.group({
      name: [undefined, Validators.required],
      gender: [undefined, Validators.required],
      number: [undefined, Validators.required],
      role: [undefined, Validators.required],
      email: [undefined, Validators.required]
    });
  }

  addUser() {
    if (this.addUserForm.valid) {
      this.service.getUser().subscribe(res => {
        this.len = Object.keys(res).length;
        for (let i = 0; i < this.len; i++) {
          if (res[i].email === this.addUserForm.value.email) {
            this.checker = false;
            this.notifier.notify('error', 'Email already exist');
          } else {
            this.checker = true;
          }
        }
        if (this.checker) {
          this.addUserForm.value.name = this.addUserForm.value.name.charAt([0]).toUpperCase() + this.addUserForm.value.name.slice(1);
          this.service.addUser(this.addUserForm.value).subscribe(response => {
            if (response) {
              this.notifier.notify('success', 'User Added');
              this.onClose();
            } else {
              this.notifier.notify('error', 'User Add Request Failed');
            }
          });
        }
      });
    }
  }

  onClose() {
    this.state.updatetotalUser(this.addUserForm.value);
    this.addUserForm.reset();
    this.dialogRef.close();
  }
}
