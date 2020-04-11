import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import {FeedsComponent} from './feeds/feeds.component';
import {ProfileComponent} from './profile/profile.component';
import {FeaturesComponent} from './features/features.component';
import {BookstoreComponent} from './bookstore/bookstore.component';

const routes: Routes = [
  { path: '', component: FeedsComponent },
  {path: 'profile', component: ProfileComponent},
  {path: 'feature', component: FeaturesComponent},
  {path: 'store', component: BookstoreComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
