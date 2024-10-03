import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitCounterComponent } from './visit-counter.component';

describe('VisitCounterComponent', () => {
  let component: VisitCounterComponent;
  let fixture: ComponentFixture<VisitCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitCounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
