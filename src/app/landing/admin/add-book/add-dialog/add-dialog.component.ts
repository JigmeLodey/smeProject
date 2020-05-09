import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import {AdminService} from '../../admin.service';
import {AddBookStateService} from '../add-book.state.service';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css', '../../../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class AddDialogComponent implements OnInit {
  addBooks: FormGroup;
  number: number;
  scific: number;
  romance: number;
  horror: number;
  actionBook: number;
  other: number;

  constructor(private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<AddDialogComponent>,
              private state: AddBookStateService,
              private service: AdminService) {
  }

  ngOnInit(): void {
    this.buildForm();
    this.bookNumber();
  }

  private bookNumber() {
    this.service.getBooks().subscribe(res => {
      const len = Object.keys(res).length;
      for (let i = 0; i < len; i++) {
        if (res[i].name === 'Science Fiction') {
          this.scific = res[i].value;
        } else if (res[i].name === 'Action') {
          this.actionBook = res[i].value;
        } else if (res[i].name === 'Romance') {
          this.romance = res[i].value;
        } else if (res[i].name === 'Horror') {
          this.horror = res[i].value;
        } else {
          this.other = res[i].value;
        }
      }
    });
  }

  onAddBooks() {
    this.service.addBook(this.addBooks.value).subscribe(res => {
      if (res) {
        if (this.addBooks.value.genre === 'Science Fiction') {
          const val = this.scific + 1;
          this.onUpdateBook(val, 'sci');
        } else if (this.addBooks.value.genre === 'Action') {
          const val = this.actionBook + 1;
          this.onUpdateBook(val, 'action');
        } else if (this.addBooks.value.genre === 'Horror') {
          const val = this.horror + 1;
          this.onUpdateBook(val, 'horror');
        } else if (this.addBooks.value.genre === 'Romance') {
          const val = this.romance + 1;
          this.onUpdateBook(val, 'romance');
        } else {
          const val = this.other + 1;
          this.onUpdateBook(val, 'other');
        }

        this.onClosed();
      }
    });
  }

  private buildForm() {
    this.addBooks = this.formBuilder.group({
      name: [undefined, Validators.required],
      type: [undefined, Validators.required],
      genre: [undefined, Validators.required],
      author: [undefined, Validators.required],
      summary: [undefined, Validators.required]
    });
  }

  onClosed() {
    this.state.updateBook(this.addBooks.value);
    this.addBooks.reset();
    this.dialogRef.close();
  }

  private onUpdateBook(val: number, genre: string) {
    if (genre === 'sci') {
      this.service.onPostBook({name: 'Science Fiction', id: 1, value: val}, 1).subscribe(res => res);
    } else if (genre === 'action') {
      this.service.onPostBook({name: 'Action', id: 2, value: val}, 2).subscribe(res => res);
    } else if (genre === 'romance') {
      this.service.onPostBook({name: 'Romance', id: 3, value: val}, 3).subscribe(res => {
        console.log(res);
      });
    } else if (genre === 'horror') {
      this.service.onPostBook({name: 'Horror', id: 4, value: val}, 4).subscribe(res => res);
    } else {
      this.service.onPostBook({name: 'Other', id: 5, value: val}, 5).subscribe(res => res);
    }
  }
}
