import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreEventsComponent } from './explore-events.component';

describe('ExploreEventsComponent', () => {
  let component: ExploreEventsComponent;
  let fixture: ComponentFixture<ExploreEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExploreEventsComponent]
    });
    fixture = TestBed.createComponent(ExploreEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
