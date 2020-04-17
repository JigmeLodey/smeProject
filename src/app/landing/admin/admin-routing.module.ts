import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AddBookComponent} from './add-book/add-book.component';
import {UserListComponent} from './user-list/user-list.component';
import {UserPostComponent} from './user-post/user-post.component';
import {BookDonateComponent} from './book-donate/book-donate.component';
import {BookRollComponent} from './book-roll/book-roll.component';
import {AddDonationComponent} from './add-donation/add-donation.component';
import {DonationComponent} from './donation/donation.component';



const routes: Routes = [
  {path: '', component: AdminComponent, children: [
      {path: 'donation', component: DonationComponent},
      {path: 'user', component: UserListComponent},
      {path: 'post', component: UserPostComponent},
      {path: 'adddonation', component: AddDonationComponent},
      {path: '', component: DashboardComponent},
      {path: 'bookdonation', component: BookDonateComponent},
      {path: 'bookroll', component: BookRollComponent},
      {path: 'store', component: AddBookComponent}
    ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
