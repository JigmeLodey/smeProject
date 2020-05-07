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
  listData: MatTableDataSource<any>;
  displayColumn: string[] = ['id', 'name', 'author', 'genre',  'action'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) MatPaginator: MatPaginator;
  private lengths: number;
  constructor(private service: AdminService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  private getBooks() {
    this.service.getUserBookRoll().subscribe(res => {
      this.books = res;
      this.listData = new MatTableDataSource<any>(this.books);
    });
  }


  onDelete(id: any, i: any, type: any, genre: any) {
    const data = this.listData.data;
    data.splice((this.MatPaginator.pageIndex * this.MatPaginator.pageSize) + i, 1);
    this.listData.data = data;
    this.service.onDeleteUserBookRoll(id).subscribe(res => res);
  }
}
