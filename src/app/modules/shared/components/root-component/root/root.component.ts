import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/modules/core/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

  constructor(
    public api:ApiService
  ) { }

  ngOnInit(): void {
  }

}
