import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {NotifierModule} from 'angular-notifier';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [AuthComponent],
    imports: [
        CommonModule,
        AuthRoutingModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        NotifierModule,
        MatSelectModule
    ]
})
export class AuthModule { }
