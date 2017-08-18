import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { environment } from '../../environments/environment';
@Injectable()
export class TrelloService {
  key: string = '94eec5d347e7eb32926ad33eb3bc6195';
  token: string = '56788d21b6835c7814806f09c794ac51a48c1009d75c1273d6c5196ad06d8e38';
  idList: string = '5996c4cfa49283757bdee9e6';
  recomId: string = '5996af681314a3399926f376';
  socialId: string = '5996af681314a3399926f374';
  otherId: string = '5996af681314a3399926f377';
  constructor(private http: Http) { }
  createList( name: string, country: string, email: string, message: string, source: string, company?: string, sourceDesc?: string){
    let countryStr = `Country: ${country};`;
    let emailStr = `Email: ${email};`;
    let companyStr = '';
    let sourceDescStr= '';
    let labelId;
    switch(source){
      case 'Recommendations': labelId = this.recomId;
        break;
      case 'Social Network': labelId = this.socialId;
        break;
      case 'Other': labelId = this.otherId;
        break;
    }
    if(company){
      companyStr = `
      Company: ${company};`
    }
    if(sourceDesc){
      sourceDescStr = `How did You hear about us?: ${sourceDesc};
      `
    }
    let messegeStr = `Message: ${message};`;
    let params = {
      name: `${name}
      ${email}
      `,
      desc: `
      ${name}
      ${countryStr}
      ${emailStr}${companyStr}
      ${sourceDescStr}${messegeStr}`,
      idLabels: labelId

    }
    return this.http.post(`${environment.endpoint}${this.idList}&url&key=${this.key}&token=${this.token}`, params)
  }
}
