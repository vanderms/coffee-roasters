import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { toSignal } from '@angular/core/rxjs-interop';
import { distinctUntilChanged, Subject, switchMap } from 'rxjs';
import { raise } from '../../../utilities/raise';

@Component({
  selector: 'app-icon',
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css',
  host: {
    '[innerHTML]': 'content()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  private sanitizer = inject(DomSanitizer);

  private name$ = new Subject<string>();

  protected content = toSignal(
    this.name$.pipe(
      distinctUntilChanged(),
      switchMap(async (value) => {
        const data = await fetch(`/assets/icons/${value}.svg`).catch((error) =>
          raise(error)
        );
        const svg = await data.text();
        return this.sanitizer.bypassSecurityTrustHtml(svg);
      })
    )
  );

  @Input() set name(value: string) {
    if (value) this.name$.next(value);
  }
}
