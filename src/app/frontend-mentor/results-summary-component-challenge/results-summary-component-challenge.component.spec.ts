import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsSummaryComponentChallengeComponent } from './results-summary-component-challenge.component';

describe('ResultsSummaryComponentChallengeComponent', () => {
  let component: ResultsSummaryComponentChallengeComponent;
  let fixture: ComponentFixture<ResultsSummaryComponentChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsSummaryComponentChallengeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultsSummaryComponentChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
