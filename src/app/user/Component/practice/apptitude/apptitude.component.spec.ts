import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApptitudeComponent } from './apptitude.component';

describe('ApptitudeComponent', () => {
  let component: ApptitudeComponent;
  let fixture: ComponentFixture<ApptitudeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApptitudeComponent]
    });
    fixture = TestBed.createComponent(ApptitudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
