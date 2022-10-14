import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RampOfficerComponent } from './ramp-officer.component';

describe('RampOfficerComponent', () => {
  let component: RampOfficerComponent;
  let fixture: ComponentFixture<RampOfficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RampOfficerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RampOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
