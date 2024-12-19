import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRegNoComponent } from './car-reg-no.component';

describe('CarRegNoComponent', () => {
  let component: CarRegNoComponent;
  let fixture: ComponentFixture<CarRegNoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarRegNoComponent]
    });
    fixture = TestBed.createComponent(CarRegNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
