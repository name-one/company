import { Component, OnInit } from '@angular/core';

import { TrelloService } from '../services/trello.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  source: string = 'Recommendations';
  name: string;
  country: string;
  company: string;
  email: string;
  message: string;
  writedSource: string;
  status: string;
  constructor(private trelloService: TrelloService) {

  }
  ngOnInit() {
  }
  submit(){
    if(this.checkEmail()){
      this.trelloService.createList(this.name, this.country, this.email, this.message, this.source, this.company, this.writedSource).subscribe( data=>{
        this.status = 'ok';
      }, err=>{
        this.status = 'error';
      });
    }
  }
  toggleFocus(event){
    let focus = event.target.parentNode;
    focus.classList.toggle('form__field_focus')
  }
  checkEmail(event?){
    let parentNode;
    if(event){
      parentNode = event.target.parentNode;
    }
    let pattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if(pattern.test(this.email)){
      if(parentNode){
        parentNode.classList.remove('form__field_invalid');
      }
      return true;
    }
    else{
      if(parentNode){
        parentNode.classList.add('form__field_invalid');
      }
      return false;
    }
  }
  checkRequared(event){
    let parentNode = event.target.parentNode;
    if( event.target.value == ''){
      parentNode.classList.add('form__field_invalid');
    }else{
      parentNode.classList.remove('form__field_invalid');
    }
  }
}
