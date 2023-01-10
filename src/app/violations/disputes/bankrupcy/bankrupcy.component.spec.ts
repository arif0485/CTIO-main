import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankrupcyComponent } from './bankrupcy.component';

describe('BankrupcyComponent', () => {
  let component: BankrupcyComponent;
  let fixture: ComponentFixture<BankrupcyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankrupcyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankrupcyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
