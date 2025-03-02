import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconComponent } from '../../utilities/icon/icon.component';

type CardDetails = {
  icon: string;
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
      icon: 'assets/stock/collection/gran-expresso.png',
      title: 'Gran Espresso',
      text: ' Light and flavorful blend with cocoa and black pepper for an intense experience',
    },
    {
      icon: 'assets/stock/collection/planalto.png',
      title: 'Planalto',
      text: 'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts',
    },
    {
      icon: 'assets/stock/collection/picollo.png',
      title: 'Picollo',
      text: 'Mild and smooth blend featuring notes of toasted almond and dried cherry ',
    },
    {
      icon: 'assets/stock/collection/danche.png',
      title: 'Danche',
      text: 'Ethiopian hand-harvested blend densely packed with vibrant fruit notes',
    },
  ];

  protected readonly reasons: CardDetails[] = [
    {
      icon: 'reasons/coffee-bean',
      title: 'Best quality',
      text: 'Discover an endless variety of the world’s best artisan coffee from each of our roasters.',
    },
    {
      icon: 'reasons/benefits',
      title: 'Exclusive benefits',
      text: 'Special offers and swag when you subscribe, including 30% off your first shipment..',
    },
    {
      icon: 'reasons/shipping',
      title: 'Free shipping',
      text: 'We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.',
    },
  ];

  protected readonly how: CardDetails[] = [
    {
      icon: '01',
      title: 'Pick your coffee',
      text: 'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.',
    },
    {
      icon: '02',
      title: 'Choose the frequency',
      text: 'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.',
    },
    {
      icon: '03',
      title: 'Receive and enjoy!',
      text: 'We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.',
    },
  ];
}
