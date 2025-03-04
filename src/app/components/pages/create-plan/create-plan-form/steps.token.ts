import { InjectionToken } from '@angular/core';

const CREATE_PLAN_STEPS = [
  {
    id: 'preferences',
    label: 'How do you drink your coffee?',
    name: 'Preferences',
    options: [
      {
        title: 'Capsule',
        text: 'Compatible with Nespresso systems and similar brewers',
      },
      {
        title: 'Filter',
        text: 'For pour over or drip methods like Aeropress, Chemex, and V60',
      },
      {
        title: 'Espresso',
        text: 'Dense and finely ground beans for an intense, flavorful experience',
      },
    ],
  },
  {
    id: 'beantype',
    label: 'What type of coffee?',
    name: 'Bean Type',
    options: [
      {
        title: 'Single Origin',
        text: 'Distinct, high quality coffee from a specific family-owned farm',
      },
      {
        title: 'Decaf',
        text: 'Just like regular coffee, except the caffeine has been removed',
      },
      {
        title: 'Blended',
        text: 'Combination of two or three dark roasted beans of organic coffees',
      },
    ],
  },
  {
    id: 'quantity',
    label: 'How much would you like?',
    name: 'Quantity',
    options: [
      {
        title: '250g',
        text: 'Perfect for the solo drinker. Yields about 12 delicious cups.',
      },
      {
        title: '500g',
        text: 'Perfect option for a couple. Yields about 40 delectable cups.',
      },
      {
        title: '1000g',
        text: 'Perfect for offices and events. Yields about 90 delightful cups.',
      },
    ],
  },
  {
    id: 'grindoption',
    label: 'Want us to grind them?',
    name: 'Grind Option',
    options: [
      {
        title: 'Wholebean',
        text: 'Best choice if you cherish the full sensory experience',
      },
      {
        title: 'Filter',
        text: 'For drip or pour-over coffee methods such as V60 or Aeropress',
      },
      {
        title: 'Cafetiére',
        text: ' Course ground beans specially suited for french press coffee',
      },
    ],
  },
  {
    id: 'deliveries',
    name: 'Deliveries',
    label: 'How often should we deliver?',
    options: [
      {
        title: 'Every week',
        text: '$7.20 per shipment. Includes free first-class deliveries.',
      },
      {
        title: 'Every 2 weeks',
        text: '$9.60 per shipment. Includes free priority deliveries.',
      },
      {
        title: 'Every month',
        text: '$12.00 per shipment. Includes free priority deliveries.',
      },
    ],
  },
] as const;

export const CreatePlanStepsToken = new InjectionToken('CreatePlanStepsToken', {
  providedIn: 'root',
  factory: () => CREATE_PLAN_STEPS,
});
