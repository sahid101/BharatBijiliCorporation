import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldtransactionComponent } from './oldtransaction.component';

describe('OldtransactionComponent', () => {
  let component: OldtransactionComponent;
  let fixture: ComponentFixture<OldtransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldtransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OldtransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
