import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlanFormContainer } from './create-plan-form.container';

describe('CreatePlanFormContainer', () => {
  let component: CreatePlanFormContainer;
  let fixture: ComponentFixture<CreatePlanFormContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePlanFormContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(CreatePlanFormContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
