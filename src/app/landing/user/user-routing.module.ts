import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {FeedsComponent} from './feeds/feeds.component';
import {ProfileComponent} from './profile/profile.component';
import {FeaturesComponent} from './features/features.component';
import {BookstoreComponent} from './bookstore/bookstore.component';
import {DonationComponent} from './donation/donation.component';
import {BookdonationComponent} from './bookdonation/bookdonation.component';
import {BookRollComponent} from './book-roll/book-roll.component';


const routes: Routes = [

      {path: '', component: BookstoreComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'feed', component: FeedsComponent},
      {path: 'feature', component: FeaturesComponent},
  {path: 'donation', component: DonationComponent},
  {path: 'bookdonation', component: BookdonationComponent},
  {path: 'bookroll', component: BookRollComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
