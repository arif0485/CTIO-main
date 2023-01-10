import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForcedOntoComponent } from './forced-onto.component';

describe('ForcedOntoComponent', () => {
  let component: ForcedOntoComponent;
  let fixture: ComponentFixture<ForcedOntoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForcedOntoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForcedOntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
