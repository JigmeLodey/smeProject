import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminShareRoutingModule } from './admin-share-routing.module';
import { AdminShareComponent } from './admin-share.component';
import { FooterComponent } from './footer/footer.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
    declarations: [AdminShareComponent, FooterComponent],
    exports: [
        FooterComponent
    ],
  imports: [
    CommonModule,
    AdminShareRoutingModule,
    MatCardModule
  ]
})
export class AdminShareModule { }
