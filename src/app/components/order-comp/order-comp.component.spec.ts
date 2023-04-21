import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCompComponent } from './order-comp.component';

describe('OrderCompComponent', () => {
  let component: OrderCompComponent;
  let fixture: ComponentFixture<OrderCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
