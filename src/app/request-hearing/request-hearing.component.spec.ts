import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestHearingComponent } from './request-hearing.component';

describe('RequestHearingComponent', () => {
  let component: RequestHearingComponent;
  let fixture: ComponentFixture<RequestHearingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestHearingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestHearingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
