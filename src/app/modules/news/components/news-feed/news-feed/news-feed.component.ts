import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/modules/core/services/api.service';

export interface response<T>{ 
  results:T[]
}
export interface nestedNews {
  title?:any,
  description?:any,
  image_url?:any,
  source_id?:any,
  pubDate?:any,
  content?:any
}
@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss'],
})
export class NewsFeedComponent implements OnInit {
  noImage = "file:///C:/Users/sladk/OneDrive/Desktop/%D0%94%D0%B8%D0%BF%D0%BB%D0%BE%D0%BC/news/frontend/src/assets/img/no_img.png"
  mode: string;
  constructor(public api: ApiService, protected route: ActivatedRoute) {
    this.mode = this.route.snapshot.data['mode'];
  }
  data: nestedNews[] = [
    // {
    //   title:
    //     'Horizon Forbidden West – Új előzetesen a nyugati vidékek kihívásai',

    //   description:
    //     'Aloy kalandjának folytatásában úgy tűnik nem sok alkalmunk lesz tétlenül, malmozva ücsörögni.',
    //   pubDate: '2022-02-04 07:07:01',
     
    //   source_id: 'pcguru',
    //   content: "Aloy kalandjának folytatásában úgy tűnik nem sok alkalmunk lesz tétlenül, malmozva ücsörögniAloy kalandjának folytatásában úgy tűnik nem sok alkalmunk lesz tétlenül, malmozva ücsörögniAloy kalandjának folytatásában úgy tűnik nem sok alkalmunk lesz tétlenül, malmozva ücsörögniAloy kalandjának folytatásában úgy tűnik nem sok alkalmunk lesz tétlenül, malmozva ücsörögni"
    // },
    // {
    //   title:
    //     'Horizon Forbidden West – Új előzetesen a nyugati vidékek kihívásai',

    //   description:
    //     'Aloy kalandjának folytatásában úgy tűnik nem sok alkalmunk lesz tétlenül, malmozva ücsörögni.',
    //   pubDate: '2022-02-04 07:07:01',
    //   image_url:
    //     'http://www.pcguru.hu/uploads/news/mid/horizon-forbidden-west-uj-elozetesen-a-nyugati-videkek-kihivasai-hirek-4acebfe659a8326cb803-mid.jpg',
    //   source_id: 'pcguru',
    // },
    // {
    //   title:
    //     'Horizon Forbidden West – Új előzetesen a nyugati vidékek kihívásai',

    //   description:
    //     'Aloy kalandjának folytatásában úgy tűnik nem sok alkalmunk lesz tétlenül, malmozva ücsörögni.',
    //   pubDate: '2022-02-04 07:07:01',
    //   image_url:
    //     'http://www.pcguru.hu/uploads/news/mid/horizon-forbidden-west-uj-elozetesen-a-nyugati-videkek-kihivasai-hirek-4acebfe659a8326cb803-mid.jpg',
    //   source_id: 'pcguru',
    // },
    // {
    //   title:
    //     'Horizon Forbidden West – Új előzetesen a nyugati vidékek kihívásai',

    //   description:
    //     'Aloy kalandjának folytatásában úgy tűnik nem sok alkalmunk lesz tétlenül, malmozva ücsörögni.',
    //   pubDate: '2022-02-04 07:07:01',
    //   image_url:
    //     'http://www.pcguru.hu/uploads/news/mid/horizon-forbidden-west-uj-elozetesen-a-nyugati-videkek-kihivasai-hirek-4acebfe659a8326cb803-mid.jpg',
    //   source_id: 'pcguru',
    // },
  ];
  ngOnInit(): void {
    this.api
      .getNewsByCategory(this.mode)
      .subscribe((res: response<nestedNews>) => {
        this.data = res.results;
      });
  }
}
