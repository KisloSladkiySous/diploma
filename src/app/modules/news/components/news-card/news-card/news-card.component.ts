import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {
  @Input() title!:string
  @Input() description!:string
  @Input() pathToImg!:string
  @Input() source!:string
  @Input() date!:any
  @Input() id!:any
  @Input() content!:any
  imageAlt = "https://cdn.discordapp.com/attachments/705102880306233414/987084738328154152/img.png"
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    console.log(this.imageAlt)
  }
  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
}
a() { 
  
}

}
