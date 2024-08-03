import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GTOComponent } from './gto.component';

describe('GTOComponent', () => {
  let component: GTOComponent;
  let fixture: ComponentFixture<GTOComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GTOComponent]
    });
    fixture = TestBed.createComponent(GTOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
