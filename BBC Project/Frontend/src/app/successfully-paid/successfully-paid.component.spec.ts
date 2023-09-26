import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfullyPaidComponent } from './successfully-paid.component';

describe('SuccessfullyPaidComponent', () => {
  let component: SuccessfullyPaidComponent;
  let fixture: ComponentFixture<SuccessfullyPaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessfullyPaidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfullyPaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
