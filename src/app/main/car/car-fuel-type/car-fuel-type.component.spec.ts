import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarFuelTypeComponent } from './car-fuel-type.component';

describe('CarFuelTypeComponent', () => {
  let component: CarFuelTypeComponent;
  let fixture: ComponentFixture<CarFuelTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarFuelTypeComponent]
    });
    fixture = TestBed.createComponent(CarFuelTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
