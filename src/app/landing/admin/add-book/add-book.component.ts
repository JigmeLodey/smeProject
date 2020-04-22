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
  lengths: number;
  roll: number;
  donate: number;
  scific: number;
  romance: number;
  horror: number;
  actionBook: number;
  other: number;
  displayColumn: string[] = ['id', 'name', 'author', 'genre', 'type', 'action'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) MatPaginator: MatPaginator;

  constructor(private service: AdminService, public dialog: MatDialog, private state: AddBookStateService) {
  }

  ngOnInit(): void {
    this.getBookStore();
    this.getBookUpdate();
    this.onUpdateValues();
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

  onDelete(id: any, i: any, type: any, genre: any) {
    const data = this.listData.data;
    data.splice((this.MatPaginator.pageIndex * this.MatPaginator.pageSize) + i, 1);
    this.listData.data = data;
    this.service.onDeleteBook(id).subscribe(res => res);
    this.lengths = this.lengths - 1;
    if (type === 'Donated') {
      this.donate = this.donate - 1;
    } else {
      this.roll = this.roll - 1;
    }
    this.updateChart(genre);
  }

  onOpen() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    this.dialog.open(AddDialogComponent, dialogConfig);
  }

  getBookUpdate() {
    this.state.showBook.subscribe((res: any) => {
      const value = res;
      const data = this.listData.data;
      data.push(res);
      this.listData.data = data;
      this.lengths += 1;
      if (value.type === 'Donated') {
        this.donate = this.donate + 1;
      } else {
        this.roll = this.roll + 1;
      }
    });
  }

  private onUpdateValues() {
    this.service.getStore().subscribe(res => {
      this.donate = 0;
      this.roll = 0;
      this.lengths = Object.keys(res).length;
      for (let i = 0; i < this.lengths; i++) {
        if (res[i].type === 'Donated') {
          this.donate = this.donate + 1;
        } else {
          this.roll = this.roll + 1;
        }
      }
    });
  }

  private updateChart(genre: any) {
    this.service.getBooks().subscribe(res => {
      const len = Object.keys(res).length;
      for (let i = 0; i < len; i++) {
        if (res[i].name === 'Science Fiction') {
          this.scific = res[i].value;
        } else if (res[i].name === 'Action') {
          this.actionBook = res[i].value;
        } else if (res[i].name === 'Horror') {
          this.horror = res[i].value;
        } else if (res[i].name === 'Romance') {
          this.romance = res[i].value;
        } else {
          this.other = res[i].value;
        }
      }
      if (genre === 'Science Fiction') {
        this.scific = this.scific - 1;
        this.service.onPostBook({name: 'Science Fiction', id: 1, value: this.scific}, 1).subscribe(response => response);
      } else if (genre === 'Action') {
        this.actionBook = this.actionBook - 1;
        this.service.onPostBook({name: 'Action', id: 2, value: this.actionBook}, 2).subscribe(response => response);
      } else if (genre === 'Romance') {
        this.romance = this.romance - 1;
        this.service.onPostBook({name: 'Romance', id: 3, value: this.romance}, 3).subscribe(response => response);
      } else if (genre === 'Horror') {
        this.horror = this.horror - 1;
        this.service.onPostBook({name: 'Horror', id: 4, value: this.horror}, 4).subscribe(response => response);
      } else {
        this.other = this.other - 1;
        this.service.onPostBook({name: 'Other', id: 5, value: this.other}, 5).subscribe(response => response);
      }
    });
  }
}
