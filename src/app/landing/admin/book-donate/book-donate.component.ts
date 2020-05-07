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
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) MatPaginator: MatPaginator;
  private lengths: number;
  constructor( private service: AdminService) { }

  ngOnInit(): void {
    this.getBooks();
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
}
