import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviourCheckboxComponent } from './behaviour-checkbox.component';

describe('BehaviourCheckboxComponent', () => {
  let component: BehaviourCheckboxComponent;
  let fixture: ComponentFixture<BehaviourCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BehaviourCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BehaviourCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
