import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartMCQComponent } from './start-mcq.component';

describe('StartMCQComponent', () => {
  let component: StartMCQComponent;
  let fixture: ComponentFixture<StartMCQComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartMCQComponent]
    });
    fixture = TestBed.createComponent(StartMCQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
