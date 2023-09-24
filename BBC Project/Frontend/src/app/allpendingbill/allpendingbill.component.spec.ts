import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllpendingbillComponent } from './allpendingbill.component';

describe('AllpendingbillComponent', () => {
  let component: AllpendingbillComponent;
  let fixture: ComponentFixture<AllpendingbillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllpendingbillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllpendingbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
