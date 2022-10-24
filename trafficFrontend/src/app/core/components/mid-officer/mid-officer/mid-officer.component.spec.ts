import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidOfficerComponent } from './mid-officer.component';

describe('MidOfficerComponent', () => {
  let component: MidOfficerComponent;
  let fixture: ComponentFixture<MidOfficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidOfficerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MidOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
