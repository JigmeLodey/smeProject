import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {AdminService} from '../admin.service';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {AddUserComponent} from '../user-list/add-user/add-user.component';
import {AddDialogComponent} from './add-dialog/add-dialog.component';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css', '../../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class AddBookComponent implements OnInit {
  listData: MatTableDataSource<any>;
  searchKey: string;
  books: any;
  displayColumn: string[] = ['id', 'name', 'author', 'genre', 'type', 'action'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) MatPaginator: MatPaginator;
  constructor(private service: AdminService,  public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getBookStore();
  }

  private getBookStore() {
    this.service.getStore().subscribe(res => {
      this.books = res;
      this.listData = new MatTableDataSource<any>(this.books);
      this.listData.sort = this.sort;
      this.listData.paginator = this.MatPaginator;
    });
  }

  onEdit(id: any, i: any) {

  }

  onDelete(id: any, i: any, user: string) {

  }

  onOpen() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    this.dialog.open(AddDialogComponent, dialogConfig);
  }
}
