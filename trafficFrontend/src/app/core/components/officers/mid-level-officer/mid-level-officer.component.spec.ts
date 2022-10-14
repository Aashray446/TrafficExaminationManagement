import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidLevelOfficerComponent } from './mid-level-officer.component';

describe('MidLevelOfficerComponent', () => {
  let component: MidLevelOfficerComponent;
  let fixture: ComponentFixture<MidLevelOfficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidLevelOfficerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MidLevelOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
