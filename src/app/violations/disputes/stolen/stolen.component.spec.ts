import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StolenComponent } from './stolen.component';

describe('StolenComponent', () => {
  let component: StolenComponent;
  let fixture: ComponentFixture<StolenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StolenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StolenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
