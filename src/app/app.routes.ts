import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Coffeeroasters: Homepage',
    loadComponent: () => {
      return import('../app/components/pages/home/home.component').then(
        (m) => m.HomeComponent,
      );
    },
  },
];
