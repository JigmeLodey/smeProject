import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {HttpClientModule} from '@angular/common/http';
import {NotifierModule} from 'angular-notifier';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MatDialogModule} from '@angular/material/dialog';
import {AddUserComponent} from './landing/admin/user-list/add-user/add-user.component';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms';
import {EditUserComponent} from './landing/admin/user-list/edit-user/edit-user.component';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    NotifierModule,
    FontAwesomeModule,
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  exports: [
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddUserComponent, EditUserComponent]
})
export class AppModule {
}
