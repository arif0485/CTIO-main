import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeverOwnedComponent } from './never-owned.component';

describe('NeverOwnedComponent', () => {
  let component: NeverOwnedComponent;
  let fixture: ComponentFixture<NeverOwnedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeverOwnedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeverOwnedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
