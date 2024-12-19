import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarPaymentDetailsComponent } from './car-payment-details.component';

describe('CarPaymentDetailsComponent', () => {
  let component: CarPaymentDetailsComponent;
  let fixture: ComponentFixture<CarPaymentDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarPaymentDetailsComponent]
    });
    fixture = TestBed.createComponent(CarPaymentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
