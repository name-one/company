import { Injectable } from '@angular/core';
import { slides } from '../model/slides';
import { aboutItems } from '../model/about.model';
@Injectable()
export class DataService {

  constructor() { }
  getSlides(){
    return slides;
  }
  getAboutItems(){
    return aboutItems;
  }
}
