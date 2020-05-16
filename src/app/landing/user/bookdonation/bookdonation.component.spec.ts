import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookdonationComponent } from './bookdonation.component';

describe('BookdonationComponent', () => {
  let component: BookdonationComponent;
  let fixture: ComponentFixture<BookdonationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookdonationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookdonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
