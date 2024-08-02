import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadCodingComponent } from './load-coding.component';

describe('LoadCodingComponent', () => {
  let component: LoadCodingComponent;
  let fixture: ComponentFixture<LoadCodingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadCodingComponent]
    });
    fixture = TestBed.createComponent(LoadCodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
