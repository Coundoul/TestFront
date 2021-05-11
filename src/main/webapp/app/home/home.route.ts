import { Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { ReserverComponent } from './reserver/reserver.component';
import { SearchComponent } from './search/search.component';

export const HOME_ROUTE: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      pageTitle: 'home.title',
    },
  },
  {
    path: 'search',
    component: SearchComponent,
    data: {
      pageTitle: 'home.title',
    },
  },
  {
    path: 'reserver',
    component: ReserverComponent,
    data: {
      pageTitle: 'home.title',
    },
  }
];
