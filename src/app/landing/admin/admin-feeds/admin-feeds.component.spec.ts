import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFeedsComponent } from './admin-feeds.component';

describe('AdminFeedsComponent', () => {
  let component: AdminFeedsComponent;
  let fixture: ComponentFixture<AdminFeedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFeedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
