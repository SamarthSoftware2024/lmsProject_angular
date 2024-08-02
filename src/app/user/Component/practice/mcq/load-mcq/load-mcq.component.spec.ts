import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadMCQComponent } from './load-mcq.component';

describe('LoadMCQComponent', () => {
  let component: LoadMCQComponent;
  let fixture: ComponentFixture<LoadMCQComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadMCQComponent]
    });
    fixture = TestBed.createComponent(LoadMCQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
