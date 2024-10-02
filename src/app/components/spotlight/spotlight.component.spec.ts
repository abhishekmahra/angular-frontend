import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotlightComponent } from './spotlight.component';

describe('SpotlightComponent', () => {
  let component: SpotlightComponent;
  let fixture: ComponentFixture<SpotlightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpotlightComponent]
    });
    fixture = TestBed.createComponent(SpotlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
