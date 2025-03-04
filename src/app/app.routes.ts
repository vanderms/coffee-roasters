import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Coffeeroasters: Homepage',
    loadComponent: async () => {
      const { HomeComponent } = await import(
        '../app/components/pages/home/home.component'
      );
      return HomeComponent;
    },
  },
  {
    path: 'about-us',
    title: 'Coffeeroasters: About Us',
    loadComponent: async () => {
      const { AboutUsComponent } = await import(
        '../app/components/pages/about-us/about-us.component'
      );
      return AboutUsComponent;
    },
  },
  {
    path: 'create-plan',
    title: 'Coffeeroasters: Create Your Plan',
    loadComponent: async () => {
      const { CreatePlanPage: page } = await import(
        '../app/components/pages/create-plan/create-plan.page'
      );
      return page;
    },
  },
];
