import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {UserListComponent} from './user-list/user-list.component';
import {AddBookComponent} from './add-book/add-book.component';
import {UserPostComponent} from './user-post/user-post.component';
import {BookRollComponent} from './book-roll/book-roll.component';
import {BookDonateComponent} from './book-donate/book-donate.component';
import {AddDonationComponent} from './add-donation/add-donation.component';
import {DonationComponent} from './donation/donation.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { AddUserComponent } from './user-list/add-user/add-user.component';
import {MatSelectModule} from '@angular/material/select';
import {NotifierModule} from 'angular-notifier';
import { EditUserComponent } from './user-list/edit-user/edit-user.component';
import {AdminShareModule} from './admin-share/admin-share.module';
import { AdminFeedsComponent } from './admin-feeds/admin-feeds.component';
import { AddDialogComponent } from './add-book/add-dialog/add-dialog.component';






@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    UserListComponent,
    AddBookComponent,
    UserPostComponent,
    BookRollComponent,
    BookDonateComponent,
    AddDonationComponent,
    DonationComponent,
    AddUserComponent,
    EditUserComponent,
    AdminFeedsComponent,
    AddDialogComponent,
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        NgxChartsModule,
        MatMenuModule,
        MatIconModule,
        MatSidenavModule,
        MatButtonModule,
        MatToolbarModule,
        FormsModule,
        MatPaginatorModule,
        MatTableModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatSelectModule,
        NotifierModule,
        AdminShareModule
    ],
  exports: [
    MatSelectModule
  ]
})
export class AdminModule {

}
