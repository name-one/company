import { Component, OnInit, Input } from '@angular/core';

import { DataService } from '../services/data.service';
import { AboutItem } from '../model/about.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @Input()
  state: string;
  items: AboutItem[];
  constructor( private dataService: DataService) {
    this.items =  this.dataService.getAboutItems();
  }

  ngOnInit() {
  }

}
