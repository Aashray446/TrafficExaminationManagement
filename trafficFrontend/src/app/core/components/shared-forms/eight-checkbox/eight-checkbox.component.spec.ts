import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EightCheckboxComponent } from './eight-checkbox.component';

describe('EightCheckboxComponent', () => {
  let component: EightCheckboxComponent;
  let fixture: ComponentFixture<EightCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EightCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EightCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
