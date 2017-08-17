import { Component, OnInit } from '@angular/core';

import { Slide } from '../model/slides';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  slides: Slide[];
  constructor( private dataService: DataService) { }

  ngOnInit() {
    this.slides = this.getSlides();
  }
  getSlides(){
    return this.dataService.getSlides();
  }
}
