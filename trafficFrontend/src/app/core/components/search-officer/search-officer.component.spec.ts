import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOfficerComponent } from './search-officer.component';

describe('SearchOfficerComponent', () => {
  let component: SearchOfficerComponent;
  let fixture: ComponentFixture<SearchOfficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchOfficerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
