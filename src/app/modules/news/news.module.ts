import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsFeedComponent } from './components/news-feed/news-feed/news-feed.component';
import { NewsCardComponent } from './components/news-card/news-card/news-card.component';
import { SharedModule } from '../shared/shared.module';
import { SpecialNewsComponent } from './special-news/special-news.component';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [
    NewsFeedComponent,
    NewsCardComponent,
    SpecialNewsComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class NewsModule { }
