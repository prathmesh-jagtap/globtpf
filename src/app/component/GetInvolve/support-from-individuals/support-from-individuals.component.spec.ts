import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportFromIndividualsComponent } from './support-from-individuals.component';

describe('SupportFromIndividualsComponent', () => {
  let component: SupportFromIndividualsComponent;
  let fixture: ComponentFixture<SupportFromIndividualsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportFromIndividualsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupportFromIndividualsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
