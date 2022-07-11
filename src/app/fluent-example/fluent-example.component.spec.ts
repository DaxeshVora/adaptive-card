import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluentExampleComponent } from './fluent-example.component';

describe('FluentExampleComponent', () => {
  let component: FluentExampleComponent;
  let fixture: ComponentFixture<FluentExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluentExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FluentExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
