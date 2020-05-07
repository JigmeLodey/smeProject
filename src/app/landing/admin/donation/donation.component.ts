import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {AdminService} from '../admin.service';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css', '../../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class DonationComponent implements OnInit {
  private donation: any;
  listData: MatTableDataSource<any>;
  displayColumn: string[] = ['id', 'name', 'author', 'genre', 'action'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) MatPaginator: MatPaginator;
  private lengths: number;

  constructor(private service: AdminService) {
  }

  ngOnInit(): void {
    this.getBooks();
  }

  private getBooks() {
    this.service.getUserDonatio().subscribe(res => {
      this.donation = res;
      this.listData = new MatTableDataSource<any>(this.donation);
    });
  }


  onDelete(id: any, i: any, type: any, genre: any) {
    const data = this.listData.data;
    data.splice((this.MatPaginator.pageIndex * this.MatPaginator.pageSize) + i, 1);
    this.listData.data = data;
    this.service.onDeleteUserDonation(id).subscribe(res => res);
  }
}
