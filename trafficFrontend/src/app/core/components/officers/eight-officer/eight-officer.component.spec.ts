import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EightOfficerComponent } from './eight-officer.component';

describe('EightOfficerComponent', () => {
  let component: EightOfficerComponent;
  let fixture: ComponentFixture<EightOfficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EightOfficerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EightOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
