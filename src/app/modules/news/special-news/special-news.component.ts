import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-special-news',
  templateUrl: './special-news.component.html',
  styleUrls: ['./special-news.component.scss']
})
export class SpecialNewsComponent implements OnInit {

  constructor(private route: ActivatedRoute,private sanitizer: DomSanitizer) { }
  title!:string
  description!:string
  pathToImg!:string
  source!:string
  date!:any
  id!:any
  content!:any
  imageAlt = "https://cdn.discordapp.com/attachments/705102880306233414/987084738328154152/img.png"
  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
      console.log(params)
      console.log(params); // { orderby: "price" }
      this.title = params['title'];
      this.description = params['desc'];
      this.pathToImg = params['src'];
      this.source = params['source'];
      this.date = params['date'];
      this.content = params['content'];
    }
  );
  }
  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
}
a() { 
  
}
}
