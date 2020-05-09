import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { FeedsComponent } from './feeds/feeds.component';
import { ProfileComponent } from './profile/profile.component';
import { BookstoreComponent } from './bookstore/bookstore.component';
import { FeaturesComponent } from './features/features.component';
import { ShareComponent } from './share/share.component';
import { HeaderComponent } from './share/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [UserComponent, FeedsComponent, ProfileComponent, BookstoreComponent, FeaturesComponent, ShareComponent, HeaderComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ]
})
export class UserModule { }
