import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookRollComponent } from './book-roll.component';

describe('BookRollComponent', () => {
  let component: BookRollComponent;
  let fixture: ComponentFixture<BookRollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookRollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookRollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
