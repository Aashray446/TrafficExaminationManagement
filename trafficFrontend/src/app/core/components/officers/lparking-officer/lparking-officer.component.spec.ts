import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LparkingOfficerComponent } from './lparking-officer.component';

describe('LparkingOfficerComponent', () => {
  let component: LparkingOfficerComponent;
  let fixture: ComponentFixture<LparkingOfficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LparkingOfficerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LparkingOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
