import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindashdetailComponent } from './admindashdetail.component';

describe('AdmindashdetailComponent', () => {
  let component: AdmindashdetailComponent;
  let fixture: ComponentFixture<AdmindashdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindashdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindashdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
