import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewCompComponent } from './review-comp.component';

describe('ReviewCompComponent', () => {
  let component: ReviewCompComponent;
  let fixture: ComponentFixture<ReviewCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
