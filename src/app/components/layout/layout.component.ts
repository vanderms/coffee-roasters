import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconComponent } from '../utilities/icon/icon.component';

@Component({
  selector: 'app-layout',
  imports: [RouterModule, IconComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {

}
