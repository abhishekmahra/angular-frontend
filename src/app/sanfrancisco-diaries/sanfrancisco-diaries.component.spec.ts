import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanfranciscoDiariesComponent } from './sanfrancisco-diaries.component';

describe('SanfranciscoDiariesComponent', () => {
  let component: SanfranciscoDiariesComponent;
  let fixture: ComponentFixture<SanfranciscoDiariesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SanfranciscoDiariesComponent]
    });
    fixture = TestBed.createComponent(SanfranciscoDiariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
