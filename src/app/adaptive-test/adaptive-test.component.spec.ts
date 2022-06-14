import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaptiveTestComponent } from './adaptive-test.component';

describe('AdaptiveTestComponent', () => {
  let component: AdaptiveTestComponent;
  let fixture: ComponentFixture<AdaptiveTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdaptiveTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdaptiveTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
