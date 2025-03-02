import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconComponent } from '../../utilities/icon/icon.component';

type CardDetails = {
  src: string;
  title: string;
  text: string;
};

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, IconComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  protected readonly collection: CardDetails[] = [
    {
      src: 'assets/stock/collection/gran-expresso.png',
      title: 'Gran Espresso',
      text: ' Light and flavorful blend with cocoa and black pepper for an intense experience',
    },
    {
      src: 'assets/stock/collection/planalto.png',
      title: 'Planalto',
      text: 'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts',
    },
    {
      src: 'assets/stock/collection/picollo.png',
      title: 'Picollo',
      text: 'Mild and smooth blend featuring notes of toasted almond and dried cherry ',
    },
    {
      src: 'assets/stock/collection/danche.png',
      title: 'Danche',
      text: 'Ethiopian hand-harvested blend densely packed with vibrant fruit notes',
    },
  ];

  protected readonly reasons: CardDetails[] = [
    {
      src: 'reasons/coffee-bean',
      title: 'Best quality',
      text: 'Discover an endless variety of the world’s best artisan coffee from each of our roasters.',
    },
    {
      src: 'reasons/benefits',
      title: 'Exclusive benefits',
      text: 'Special offers and swag when you subscribe, including 30% off your first shipment..',
    },
    {
      src: 'reasons/shipping',
      title: 'Free shipping',
      text: 'We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.',
    },
  ];
}
