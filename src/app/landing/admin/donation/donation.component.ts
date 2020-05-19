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
  listData2: MatTableDataSource<any>;
  displayColumn: string[] = ['id', 'name', 'email', 'phone', 'type', 'info', 'action'];
  displayColumn2: string[] = ['id', 'name', 'email', 'phone', 'type', 'place', 'info', 'action'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('paginator2') paginator2: MatPaginator;
  private lengths: number;
  private val: any;

  constructor(private service: AdminService) {
  }

  ngOnInit(): void {
    this.getBooks();
    this.getDoantion();
  }

  private getBooks() {
    this.service.getUserDonatio().subscribe(res => {
      this.donation = res;
      this.listData = new MatTableDataSource<any>(this.donation);
      this.listData.paginator = this.paginator;
    });
  }


  onDelete(id: any, i: any, type: any, genre: any) {
    const data = this.listData.data;
    data.splice((this.paginator.pageIndex * this.paginator.pageSize) + i, 1);
    this.listData.data = data;
    this.service.onDeleteUserDonation(id).subscribe(res => res);
    this.listData.sort = this.sort;
    this.listData.paginator = this.paginator2;
  }

  private getDoantion() {
    this.service.getUserDonationRequest().subscribe(res => {
      this.val = res;
      this.listData2 = new MatTableDataSource<any>(this.val);
      this.listData2.sort = this.sort;
    });
  }
  onDelete2(id: any, i: any, type: any, genre: any) {
    const data = this.listData2.data;
    data.splice((this.paginator2.pageIndex * this.paginator2.pageSize) + i, 1);
    this.listData2.data = data;
    this.service.onDeleteDonationRequest(id).subscribe(res => res);
  }
}
