import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlanAccordionComponent } from './create-plan-accordion.component';

describe('CreatePlanAccordionComponent', () => {
  let component: CreatePlanAccordionComponent;
  let fixture: ComponentFixture<CreatePlanAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePlanAccordionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreatePlanAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
