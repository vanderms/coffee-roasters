import {
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  forwardRef,
  input,
  signal,
  viewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IconComponent } from '../../../utilities/icon/icon.component';

export type CreatePlanAccordionOption = {
  readonly title: string;
  readonly text: string;
};

@Component({
  selector: 'app-create-plan-accordion',
  imports: [IconComponent],
  templateUrl: './create-plan-accordion.component.html',
  styleUrl: './create-plan-accordion.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CreatePlanAccordionComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreatePlanAccordionComponent implements ControlValueAccessor {
  label = input.required<string>();

  readonly options = input.required<readonly CreatePlanAccordionOption[]>();

  value = signal('');

  id = input.required<string>();

  details = viewChild.required<ElementRef<HTMLDetailsElement>>('details');

  protected isDisabled = signal(false);

  _onChange?: (value: string) => void;

  _onTouched?: () => void;

  handleChange(value: string) {
    this.value.set(value);
    if (this._onChange) this._onChange(value);
    if (this._onTouched) this._onTouched();
  }

  writeValue(value: string): void {
    this.value.set(value);
  }

  registerOnChange(fn: (value: string) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this._onTouched = fn;
  }

  setDisabledState(value: boolean): void {
    this.isDisabled.set(value);

    requestAnimationFrame(() => {
      this.details().nativeElement.open = !value;
    });
  }
}
