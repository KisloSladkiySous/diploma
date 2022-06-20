
import { Routes } from '@angular/router';
import { LoginComponent } from '../shared/components/login/login.component';
import { RootComponent } from '../shared/components/root-component/root/root.component';
import { NewsFeedComponent } from './components/news-feed/news-feed/news-feed.component';

export const newsRoutes: Routes = [

    {
        path: '',
        component: RootComponent,
        children: [
          {
          
              path: 'main',
              component: NewsFeedComponent,
              data: { mode: null}

          },
          {
            path: 'sports',
            component: NewsFeedComponent,
            data: { mode: 'sports' }
          },
          {
            path: 'politics',
            component: NewsFeedComponent,
            data: { mode: 'politics' }
          },
          {
            path: 'world',
            component: NewsFeedComponent,
            data: { mode: 'world' }
          },
          {
            path: 'technology',
            component: NewsFeedComponent,
            data: { mode: 'technology' }
          },
          {
            path: 'science',
            component: NewsFeedComponent,
            data: { mode: 'science' }
          },
          {
            path: 'health',
            component: NewsFeedComponent,
            data: { mode: 'health' }
          },
          {
            path: 'business',
            component: NewsFeedComponent,
            data: { mode: 'business' }
          },
          {
            path: 'entertainment',
            component: NewsFeedComponent,
            data: { mode: 'entertainment' }
          },
          {
            path: 'food',
            component: NewsFeedComponent,
            data: { mode: 'food' }
          },

   
          { path: '**', redirectTo: 'world' },
        ],
      },
   
      {
        path: '**',
        redirectTo: '',
      },
];

// <li routerLinkActive ="active"> <a routerLink="world">В мире</a></li>
// <li routerLinkActive ="active"><a routerLink="technology">Технологии</a></li>
// <li routerLinkActive ="active"><a routerLink="sports">Спорт</a></li>
// <li routerLinkActive ="active"><a routerLink="science">Наука</a></li>
// <li routerLinkActive ="active"><a routerLink="politics">Политика</a></li>
// <li routerLinkActive ="active"><a routerLink="health">Здоровье</a></li>
// <li routerLinkActive ="active"><a routerLink="business">Бизнес</a></li>
// <li routerLinkActive ="active"><a routerLink="entertainment">Развлечения</a></li>
// <li routerLinkActive ="active"><a routerLink="food">Еда</a></li>