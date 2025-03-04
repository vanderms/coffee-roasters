import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { IconComponent } from '../utilities/icon/icon.component';
import { filter, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-layout',
  imports: [RouterModule, IconComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  private _ = inject(Router)
    .events.pipe(
      filter((event) => event instanceof NavigationEnd),
      takeUntilDestroyed(),
    )
    .subscribe(() => this.menuClosed.set(true));

  menuClosed = signal(true);

  menuIcon = computed(() => (this.menuClosed() ? 'menu' : 'close'));

  handleMenuClick() {
    this.menuClosed.update((x) => !x);
  }
}
