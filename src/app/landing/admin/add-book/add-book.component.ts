import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {AdminService} from '../admin.service';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {AddUserComponent} from '../user-list/add-user/add-user.component';
import {AddDialogComponent} from './add-dialog/add-dialog.component';
import {AddBookStateService} from './add-book.state.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css', '../../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class AddBookComponent implements OnInit {
  listData: MatTableDataSource<any>;
  searchKey: string;
  books: any;
  chart: any;
  countersci = 0;
  counteraction = 0;
  counterromance = 0;
  counterhorror = 0;
  counterother = 0;
  displayColumn: string[] = ['id', 'name', 'author', 'genre', 'type', 'action'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) MatPaginator: MatPaginator;

  constructor(private service: AdminService, public dialog: MatDialog, private state: AddBookStateService) {
  }

  ngOnInit(): void {
    this.getBookStore();
    this.getBookUpdate();
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

  onDelete(id: any, i: any) {
    const data = this.listData.data;
    data.splice((this.MatPaginator.pageIndex * this.MatPaginator.pageSize) + i, 1);
    this.listData.data = data;
    this.service.onDeleteBook(id).subscribe(res => res);
  }

  onOpen() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    this.dialog.open(AddDialogComponent, dialogConfig);
  }

  getBookUpdate() {
    this.state.showBook.subscribe(res => {
      const data = this.listData.data;
      data.push(res);
      this.listData.data = data;
    });
  }
}
