import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {AdminService} from '../admin.service';

@Component({
  selector: 'app-book-roll',
  templateUrl: './book-roll.component.html',
  styleUrls: ['./book-roll.component.css', '../../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class BookRollComponent implements OnInit {
  books: any;
  deta1ls: any;
  listData: MatTableDataSource<any>;
  listData2: MatTableDataSource<any>;
  displayColumn: string[] = ['id', 'name', 'author', 'genre',  'action'];
  displayColumn2: string[] = ['id', 'bookname', 'author', 'booktype', 'username', 'email', 'phone',  'action'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('paginator2') paginator2: MatPaginator;
  private lengths: number;
  constructor(private service: AdminService) { }

  ngOnInit(): void {
    this.getBooks();
    this.getBreq();
  }

  private getBooks() {
    this.service.getUserBookRoll().subscribe(res => {
      this.books = res;
      this.listData = new MatTableDataSource<any>(this.books);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    });
  }


  onDelete(id: any, i: any, type: any, genre: any) {
    const data = this.listData.data;
    data.splice((this.paginator.pageIndex * this.paginator.pageSize) + i, 1);
    this.listData.data = data;
    this.service.onDeleteUserBookRoll(id).subscribe(res => res);

  }

  private getBreq() {
    this.service.getRequest().subscribe(res => {
      this.deta1ls = res;
      this.listData2 = new MatTableDataSource<any>(this.deta1ls);
      this.listData2.sort = this.sort;
      this.listData.paginator = this.paginator2;
    });
  }
  onDeletes(id: any, i: any, type: any, genre: any) {
    const data = this.listData.data;
    data.splice((this.paginator2.pageIndex * this.paginator2.pageSize) + i, 1);
    this.listData.data = data;
    this.service.getRequestDelete(id).subscribe(res => res);
  }
}
