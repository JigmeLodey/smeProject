import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { FeedsComponent } from './feeds/feeds.component';
import { ProfileComponent } from './profile/profile.component';
import { BookstoreComponent } from './bookstore/bookstore.component';
import { FeaturesComponent } from './features/features.component';


@NgModule({
  declarations: [UserComponent, FeedsComponent, ProfileComponent, BookstoreComponent, FeaturesComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
