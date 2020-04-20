import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css', '../../../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class AddDialogComponent implements OnInit {
  addBooks: FormGroup;

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  onAddBooks() {

  }

  private buildForm() {
    this.addBooks = this.formBuilder.group({
      name: [undefined, Validators.required],
      type: [undefined, Validators.required],
      genre: [undefined, Validators.required],
      author: [undefined, Validators.required]
    });
  }
}
