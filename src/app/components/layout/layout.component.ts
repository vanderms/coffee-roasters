import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconComponent } from '../utilities/icon/icon.component';

@Component({
  selector: 'app-layout',
  imports: [RouterModule, IconComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  menuClosed = signal(true);

  menuIcon = computed(() => (this.menuClosed() ? 'menu' : 'close'));

  handleMenuClick() {
    this.menuClosed.update((x) => !x);
  }
}
