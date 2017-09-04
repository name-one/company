import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { environment } from '../../environments/environment';
@Injectable()
export class TrelloService {
  key: string = '38e1d2d43c19bf4429f9d87645981cc6';
  token: string = '521df91d49dae9f0d65f9f0fbb7c018fdb75716ba94458c274331e443b008129';
  idList: string = '59a976d4886364bd28c22bd2';
  recomId: string = '59a976c31314a33999609aa2';
  socialId: string = '59a976c31314a33999609aa1';
  otherId: string = '59a976c31314a33999609aa6';
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
