import {Component, OnInit, ViewChild} from '@angular/core';
import {AdminService} from '../admin.service';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-book-donate',
  templateUrl: './book-donate.component.html',
  styleUrls: ['./book-donate.component.css', '../../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class BookDonateComponent implements OnInit {
  books: any;
  listData: MatTableDataSource<any>;
  displayColumn: string[] = ['id', 'name', 'author', 'genre',  'action'];
  listData2: MatTableDataSource<any>;
  displayColumn2: string[] = ['id', 'name', 'author', 'genre', 'username', 'email', 'phone', 'action'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) MatPaginator: MatPaginator;
  private lengths: number;
  dbooks: any;
  constructor( private service: AdminService) { }

  ngOnInit(): void {
    this.getBooks();
    this.getRequestedBooks();
  }

  private getBooks() {
    this.service.getUserDonatedBooks().subscribe(res => {
      this.books = res;
      this.listData = new MatTableDataSource<any>(this.books);
    });
  }


  onDelete(id: any, i: any, type: any, genre: any) {
    const data = this.listData.data;
    data.splice((this.MatPaginator.pageIndex * this.MatPaginator.pageSize) + i, 1);
    this.listData.data = data;
    this.service.onDeleteUserDonateBook(id).subscribe(res => res);
  }
  private getRequestedBooks() {
    this.service.getUserRquestForBook().subscribe(res => {
      this.dbooks = res;
      this.listData2 = new MatTableDataSource<any>(this.dbooks);
    });
  }


  onDeletes(id: any, i: any, type: any, genre: any) {
    const data = this.listData2.data;
    data.splice((this.MatPaginator.pageIndex * this.MatPaginator.pageSize) + i, 1);
    this.listData2.data = data;
    this.service.onDeleteBookRequest(id).subscribe(res => res);
  }
}
