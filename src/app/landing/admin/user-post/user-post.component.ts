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
  displayColumn: string[] = ['id', 'message', 'action'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) MatPaginator: MatPaginator;
  private lengths: number;

  constructor(private service: AdminService) { }

  ngOnInit(): void {
    this.getFeedback();
  }

  private getFeedback() {
    this.service.getUserFeedback().subscribe(res => {
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
