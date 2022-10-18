import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RampCheckboxComponent } from './ramp-checkbox.component';

describe('RampCheckboxComponent', () => {
  let component: RampCheckboxComponent;
  let fixture: ComponentFixture<RampCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RampCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RampCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
