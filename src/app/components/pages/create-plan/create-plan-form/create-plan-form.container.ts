import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CreatePlanAccordionComponent } from '../create-plan-accordion/create-plan-accordion.component';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { map, startWith, tap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-plan-form',
  imports: [CommonModule, CreatePlanAccordionComponent, ReactiveFormsModule],
  templateUrl: './create-plan-form.container.html',
  styleUrl: './create-plan-form.container.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreatePlanFormContainer {
  private fb = inject(NonNullableFormBuilder);

  protected readonly steps = [
    {
      id: 'preparationMode',
      label: 'How do you drink your coffee?',
      options: [
        {
          title: 'Capsule',
          text: 'Compatible with Nespresso systems and similar brewers',
        },
        {
          title: 'Filter',
          text: 'For pour over or drip methods like Aeropress, Chemex, and V60',
        },
        {
          title: 'Espresso',
          text: 'Dense and finely ground beans for an intense, flavorful experience',
        },
      ],
    },
    {
      id: 'coffeeType',
      label: 'What type of coffee?',
      options: [
        {
          title: 'Single Origin',
          text: 'Distinct, high quality coffee from a specific family-owned farm',
        },
        {
          title: 'Decaf',
          text: 'Just like regular coffee, except the caffeine has been removed',
        },
        {
          title: 'Blended',
          text: 'Combination of two or three dark roasted beans of organic coffees',
        },
      ],
    },
    {
      id: 'quantity',
      label: 'How much would you like?',
      options: [
        {
          title: '250g',
          text: 'Perfect for the solo drinker. Yields about 12 delicious cups.',
        },
        {
          title: '500g',
          text: 'Perfect option for a couple. Yields about 40 delectable cups.',
        },
        {
          title: '1000g',
          text: 'Perfect for offices and events. Yields about 90 delightful cups.',
        },
      ],
    },
    {
      id: 'grindMethod',
      label: 'Want us to grind them?',
      options: [
        {
          title: 'Wholebean',
          text: 'Best choice if you cherish the full sensory experience',
        },
        {
          title: 'Filter',
          text: 'For drip or pour-over coffee methods such as V60 or Aeropress',
        },
        {
          title: 'Cafetiére',
          text: ' Course ground beans specially suited for french press coffee',
        },
      ],
    },
    {
      id: 'shipping',
      label: 'How often should we deliver?',
      options: [
        {
          title: 'Every week',
          text: '$7.20 per shipment. Includes free first-class shipping.',
        },
        {
          title: 'Every 2 weeks',
          text: '$9.60 per shipment. Includes free priority shipping.',
        },
        {
          title: 'Every month',
          text: '$12.00 per shipment. Includes free priority shipping.',
        },
      ],
    },
  ] as const;

  form = this.fb.group({
    [this.steps[0].id]: [''],
    [this.steps[1].id]: { value: '', disabled: true },
    [this.steps[2].id]: { value: '', disabled: true },
    [this.steps[3].id]: { value: '', disabled: true },
    [this.steps[4].id]: { value: '', disabled: true },
  });

  protected values$ = this.form.valueChanges.pipe(
    startWith(this.form.value),
    tap((value) => {
      this.updateCoffeeType(value);
      this.updateQuantity(value);
      this.updateGridMethod(value);
      this.updateShipping(value);
    }),
  );

  _getValues(values: null | typeof this.form.value) {
    return {
      preparationMode: values?.preparationMode,
      coffeeType: values?.coffeeType,
      quantity: values?.quantity,
      grindMethod: values?.grindMethod,
      shipping: values?.shipping,
    };
  }

  updateCoffeeType(value: typeof this.form.value) {
    const coffeeType = this.form.controls.coffeeType;
    if (value.preparationMode && coffeeType.disabled) coffeeType.enable();
  }

  updateQuantity(value: typeof this.form.value) {
    const quantity = this.form.controls.quantity;
    if (value.coffeeType && quantity.disabled) quantity.enable();
  }

  updateGridMethod(value: typeof this.form.value) {
    const grindMethod = this.form.controls.grindMethod;
    if (value.preparationMode === 'Capsule' && grindMethod.enabled) {
      grindMethod.disable();
      grindMethod.setValue('');
    } else if (
      value.preparationMode !== 'Capsule' &&
      value.quantity &&
      grindMethod.disabled
    ) {
      grindMethod.enable();
    }
  }
  updateShipping(value: typeof this.form.value) {
    const shipping = this.form.controls.shipping;
    if (
      shipping.disabled &&
      ((value.preparationMode === 'Capsule' && value.quantity) ||
        value.grindMethod)
    ) {
      shipping.enable();
    }
  }
}
