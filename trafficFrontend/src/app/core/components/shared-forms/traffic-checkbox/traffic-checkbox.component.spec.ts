import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficCheckboxComponent } from './traffic-checkbox.component';

describe('TrafficCheckboxComponent', () => {
  let component: TrafficCheckboxComponent;
  let fixture: ComponentFixture<TrafficCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrafficCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrafficCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
