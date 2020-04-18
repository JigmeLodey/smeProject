import {Component, OnInit, ViewChild} from '@angular/core';
import {AdminService} from '../admin.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {AddUserComponent} from './add-user/add-user.component';
import {UserListStateService} from './user-list.state.service';
import {EditUserComponent} from './edit-user/edit-user.component';
import {EditUserStateService} from './edit-user/edit-user.state.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css', '../../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class UserListComponent implements OnInit {
  users: any;
  subscriber: any;
  emails: any;
  lengths: number;
  editId: any;
  checker: any;
  searchKey: string;
  listData: MatTableDataSource<any>;
  listDataEmails: MatTableDataSource<any>;
  displayColumn: string[] = ['id', 'name', 'email', 'gender', 'number', 'role', 'status', 'action'];
  displayColumns: string[] = ['id', 'email', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('paginator2') paginator2: MatPaginator;
  @ViewChild('paginator3') paginator3: MatPaginator;
  listDataSubsciber: MatTableDataSource<any>;
  displayColumn3: string[] = ['id', 'email', 'actions'];


  constructor(private service: AdminService,
              public dialog: MatDialog,
              private state: UserListStateService,
              private editState: EditUserStateService) {
  }

  ngOnInit(): void {
    this.getUsers();
    this.getEmail();
    this.getSubscriber();
    this.getUserUpdate();
    this.onUpdate();
  }

  getUsers(): void {
    this.service.getUser().subscribe(res => {
      this.users = res;
      this.checker = res;
      this.lengths = Object.keys(res).length;
      this.listData = new MatTableDataSource<any>(this.users);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    });
  }

  onClear() {
    this.searchKey = '';
    this.applyFliter();
  }

  applyFliter() {
    this.listData.filter = this.searchKey.trim().toLocaleLowerCase();
  }

  create() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(AddUserComponent, dialogConfig);
  }

  onEdit(id: any, eId) {
    /*this.editState.updatetotalUser(id);*/
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = id;
    this.dialog.open(EditUserComponent, dialogConfig);
    this.editId = eId;
  }

  onDelete(id: number, i, value) {
    if (value === 'user') {
      const data = this.listData.data;
      data.splice((this.paginator.pageIndex * this.paginator.pageSize) + i, 1);
      this.listData.data = data;
      this.service.onDelete(id).subscribe(res => res);
    } else if (value === 'sub') {
      const data = this.listDataSubsciber.data;
      data.splice((this.paginator3.pageIndex * this.paginator3.pageSize) + i, 1);
      this.listDataSubsciber.data = data;
      this.service.onDeleteSub(id).subscribe(res => res);
    } else {
      const data = this.listDataEmails.data;
      data.splice((this.paginator2.pageIndex * this.paginator2.pageSize) + i, 1);
      this.listDataEmails.data = data;
      this.service.onDeleteRes(id).subscribe(res => res);
    }
  }

  getEmail() {
    this.service.getEmail().subscribe(res => {
      this.emails = res;
      this.listDataEmails = new MatTableDataSource(this.emails);
      this.listDataEmails.paginator = this.paginator2;
    });
  }

  getSubscriber() {
    this.service.getSubscribe().subscribe(res => {
      this.subscriber = res;
      this.listDataSubsciber = new MatTableDataSource(this.subscriber);
      this.listDataSubsciber.paginator = this.paginator3;
    });
  }

  getUserUpdate() {
    this.state.totalUsers.subscribe(res => {
      const data = this.listData.data;
      data.push(res);
      this.listData.data = data;
    });
  }

  private onUpdate() {
    this.state.Users.subscribe(res => {
      this.listData.data[this.editId] = res;
      console.log(this.editId);
    });
  }
}
