import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LparkingCheckboxComponent } from './lparking-checkbox.component';

describe('LparkingCheckboxComponent', () => {
  let component: LparkingCheckboxComponent;
  let fixture: ComponentFixture<LparkingCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LparkingCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LparkingCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
