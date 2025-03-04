import { CommonModule, ViewportScroller } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { asyncScheduler, observeOn, startWith, tap } from 'rxjs';
import { CreatePlanAccordionComponent } from '../create-plan-accordion/create-plan-accordion.component';
import { CreatePlanStepsToken } from './steps.token';

@Component({
  selector: 'app-create-plan-form',
  imports: [
    CommonModule,
    RouterModule,
    CreatePlanAccordionComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './create-plan-form.container.html',
  styleUrl: './create-plan-form.container.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreatePlanFormContainer {
  private fb = inject(NonNullableFormBuilder);

  private scroller = inject(ViewportScroller);

  protected readonly steps = inject(CreatePlanStepsToken);

  protected currentStep = signal<string>(this.steps[0].id);

  protected form = this.fb.group({
    [this.steps[0].id]: [''],
    [this.steps[1].id]: { value: '', disabled: true },
    [this.steps[2].id]: { value: '', disabled: true },
    [this.steps[3].id]: { value: '', disabled: true },
    [this.steps[4].id]: { value: '', disabled: true },
  });

  protected values$ = this.form.valueChanges.pipe(
    startWith(this.form.value),
    observeOn(asyncScheduler),
    tap((value) => {
      this._updateBeanType(value);
      this._updateQuantity(value);
      this._updateGridOption(value);
      this._updateDeliveries(value);
      this._setCurrentStep();
    }),
  );

  _getValues(values: null | typeof this.form.value) {
    return {
      preferences: values?.preferences,
      beantype: values?.beantype,
      quantity: values?.quantity,
      grindoption: values?.grindoption,
      deliveries: values?.deliveries,
    };
  }

  _updateBeanType(value: typeof this.form.value) {
    const beantype = this.form.controls.beantype;
    if (value.preferences && beantype.disabled) {
      beantype.enable();
    } else if (!value.preferences && beantype.enabled) {
      beantype.setValue('');
      beantype.disable();
    }
  }

  _updateQuantity(value: typeof this.form.value) {
    const quantity = this.form.controls.quantity;

    if (value.beantype && quantity.disabled) {
      quantity.enable();
    } else if (!value.beantype && quantity.enabled) {
      quantity.setValue('');
      quantity.disable();
    }
  }

  _updateGridOption(value: typeof this.form.value) {
    const grindoption = this.form.controls.grindoption;

    if (
      value.preferences !== 'Capsule' &&
      value.quantity &&
      grindoption.disabled
    ) {
      grindoption.enable();
    } else if (
      grindoption.enabled &&
      (value.preferences === 'Capsule' || !value.quantity)
    ) {
      grindoption.setValue('');
      grindoption.disable();
    }
  }

  _updateDeliveries(value: typeof this.form.value) {
    const deliveries = this.form.controls.deliveries;
    if (
      deliveries.disabled &&
      ((value.preferences === 'Capsule' && value.quantity) || value.grindoption)
    ) {
      deliveries.enable();
    } else if (
      deliveries.enabled &&
      ((value.preferences === 'Capsule' && !value.quantity) ||
        (value.preferences !== 'Capsule' && !value.grindoption))
    ) {
      deliveries.setValue('');
      deliveries.disable();
    }

    console.log(value);
  }

  _setCurrentStep(): void {
    const controls = this.form.controls;

    if (controls.deliveries.enabled) {
      return this.currentStep.set(this.steps[4].id);
    }

    if (controls.grindoption.enabled) {
      return this.currentStep.set(this.steps[3].id);
    }

    if (controls.quantity.enabled) {
      return this.currentStep.set(this.steps[2].id);
    }

    if (controls.beantype.enabled) {
      return this.currentStep.set(this.steps[1].id);
    }
    return this.currentStep.set(this.steps[0].id);
  }

  scrollToAccordion(id: string) {
    this.scroller.scrollToAnchor(id);
  }
}
