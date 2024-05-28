import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollGivingComponent } from './payroll-giving.component';

describe('PayrollGivingComponent', () => {
  let component: PayrollGivingComponent;
  let fixture: ComponentFixture<PayrollGivingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayrollGivingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PayrollGivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
