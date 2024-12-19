import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarVarientComponent } from './car-varient.component';

describe('CarVarientComponent', () => {
  let component: CarVarientComponent;
  let fixture: ComponentFixture<CarVarientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarVarientComponent]
    });
    fixture = TestBed.createComponent(CarVarientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
