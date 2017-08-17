import { Injectable } from '@angular/core';
import { slides } from '../model/slides';
@Injectable()
export class DataService {

  constructor() { }
  getSlides(){
    return slides;
  }
}
