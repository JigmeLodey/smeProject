import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { DesktopComponent } from './desktop/desktop.component';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {NotifierModule} from 'angular-notifier';


@NgModule({
  declarations: [LandingComponent, DesktopComponent],
    imports: [
        CommonModule,
        LandingRoutingModule,
        MatCardModule,
        MatMenuModule,
        FontAwesomeModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        NotifierModule
    ]
})
export class LandingModule { }
