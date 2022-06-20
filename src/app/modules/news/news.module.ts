import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsFeedComponent } from './components/news-feed/news-feed/news-feed.component';
import { NewsCardComponent } from './components/news-card/news-card/news-card.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    NewsFeedComponent,
    NewsCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class NewsModule { }
