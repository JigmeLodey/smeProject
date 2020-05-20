import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {AdminService} from '../admin.service';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css', '../../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class UserPostComponent implements OnInit {
  private donation: any;
  listData: MatTableDataSource<any>;
  listData2: MatTableDataSource<any>;
  displayColumn: string[] = ['id', 'message', 'action'];
  displayColumn2: string[] = ['id', 'name', 'email', 'phone', 'message', 'action'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('paginator2') paginator2: MatPaginator;
  private lengths: number;
  private value: any;

  constructor(private service: AdminService) {
  }

  ngOnInit(): void {
    this.getFeedback();
    this.getContact();
  }

  private getFeedback() {
    this.service.getUserFeedback().subscribe(res => {
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
  }

  private getContact() {
    this.service.getContact().subscribe(res => {
      this.value = res;
      this.listData2 = new MatTableDataSource<any>(this.value);
      this.listData2.paginator = this.paginator2;
    });
  }
  onDeletes(id: any, i: any, type: any, genre: any) {
    const data = this.listData2.data;
    data.splice((this.paginator2.pageIndex * this.paginator2.pageSize) + i, 1);
    this.listData2.data = data;
    this.service.onDeleteContact(id).subscribe(res => res);
  }
}
