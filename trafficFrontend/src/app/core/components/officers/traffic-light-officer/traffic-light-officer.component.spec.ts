import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficLightOfficerComponent } from './traffic-light-officer.component';

describe('TrafficLightOfficerComponent', () => {
  let component: TrafficLightOfficerComponent;
  let fixture: ComponentFixture<TrafficLightOfficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrafficLightOfficerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrafficLightOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
