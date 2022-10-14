import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviourOfficerComponent } from './behaviour-officer.component';

describe('BehaviourOfficerComponent', () => {
  let component: BehaviourOfficerComponent;
  let fixture: ComponentFixture<BehaviourOfficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BehaviourOfficerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BehaviourOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
