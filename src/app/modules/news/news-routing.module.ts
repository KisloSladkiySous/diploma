
import { Routes } from '@angular/router';
import { LoginComponent } from '../shared/components/login/login.component';
import { RootComponent } from '../shared/components/root-component/root/root.component';
import { NewsFeedComponent } from './components/news-feed/news-feed/news-feed.component';
import { SpecialNewsComponent } from './special-news/special-news.component';

export const newsRoutes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
      {
        path: 'main',
        component: NewsFeedComponent,
        data: { mode: null },
      },
      {
        path: 'sports',
        component: NewsFeedComponent,
        data: { mode: 'sports' },
      },
      {
        path: 'politics',
        component: NewsFeedComponent,
        data: { mode: 'politics' },
      },
      {
        path: 'world',
        component: NewsFeedComponent,
        data: { mode: 'world' },
      },
      {
        path: 'technology',
        component: NewsFeedComponent,
        data: { mode: 'technology' },
      },
      {
        path: 'science',
        component: NewsFeedComponent,
        data: { mode: 'science' },
      },
      {
        path: 'health',
        component: NewsFeedComponent,
        data: { mode: 'health' },
      },
      {
        path: 'business',
        component: NewsFeedComponent,
        data: { mode: 'business' },
      },
      {
        path: 'entertainment',
        component: NewsFeedComponent,
        data: { mode: 'entertainment' },
      },
      {
        path: 'food',
        component: NewsFeedComponent,
        data: { mode: 'food' },
      },
      {
        path: 'main',
        component: SpecialNewsComponent,
      },
      {
        path: 'specialNews/:id',
        component: SpecialNewsComponent,
      },

      { path: '**', redirectTo: 'main' },
    ],
  },

  {
    path: '**',
    redirectTo: '',
  },
];

