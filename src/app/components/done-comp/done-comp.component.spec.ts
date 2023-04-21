import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneCompComponent } from './done-comp.component';

describe('DoneCompComponent', () => {
  let component: DoneCompComponent;
  let fixture: ComponentFixture<DoneCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoneCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoneCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
