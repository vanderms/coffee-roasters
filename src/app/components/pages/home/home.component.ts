import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

type CollectionCard = {
  src: string;
  title: string;
  text: string;
};

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  protected readonly collection: CollectionCard[] = [
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
}
