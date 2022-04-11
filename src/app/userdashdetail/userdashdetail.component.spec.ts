import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdashdetailComponent } from './userdashdetail.component';

describe('UserdashdetailComponent', () => {
  let component: UserdashdetailComponent;
  let fixture: ComponentFixture<UserdashdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserdashdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdashdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
