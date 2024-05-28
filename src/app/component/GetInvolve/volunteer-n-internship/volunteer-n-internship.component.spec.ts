import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerNInternshipComponent } from './volunteer-n-internship.component';

describe('VolunteerNInternshipComponent', () => {
  let component: VolunteerNInternshipComponent;
  let fixture: ComponentFixture<VolunteerNInternshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolunteerNInternshipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VolunteerNInternshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
