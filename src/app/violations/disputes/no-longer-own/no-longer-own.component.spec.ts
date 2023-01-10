import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoLongerOwnComponent } from './no-longer-own.component';

describe('NoLongerOwnComponent', () => {
  let component: NoLongerOwnComponent;
  let fixture: ComponentFixture<NoLongerOwnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoLongerOwnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoLongerOwnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
