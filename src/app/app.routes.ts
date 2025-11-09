import { Routes } from '@angular/router';
import { TestButton } from './components/test-button/test-button';
import { Card } from './components/card/card';

export const routes: Routes = [
  {
    path: '',
    component: Card,
    title: 'card Example',
  },
];
