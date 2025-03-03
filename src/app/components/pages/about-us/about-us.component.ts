import { Component } from '@angular/core';

type HeadquarterDetails = {
  icon: string;
  name: string;
  address: string[];
};

@Component({
  selector: 'app-about-us',
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent {
  protected readonly headquarters: HeadquarterDetails[] = [
    {
      icon: 'headquarters/uk',
      name: 'United Kingdom',
      address: ['68  Asfordby Rd', 'Alcaston', 'SY6 1YA', '+44 1241 918425'],
    },
    {
      icon: 'headquarters/canada',
      name: 'Canada',
      address: [
        '1528  Eglinton Avenue',
        'Toronto',
        'Ontario M4P 1A6',
        '+1 416 485 2997',
      ],
    },
    {
      icon: 'headquarters/australia',
      name: 'Australia',
      address: ['36 Swanston Street', 'Kewell', 'Victoria', '+61 4 9928 3629'],
    },
  ];
}
