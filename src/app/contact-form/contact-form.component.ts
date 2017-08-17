import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  source: string = 'Recommendations';
  constructor() { }

  ngOnInit() {
  }
  toggleFocus(event){
    let focus = event.target.parentNode;
    focus.classList.toggle('form__field_focus')
  }
  checkRequared(event){
    let parentNode = event.target.parentNode;
    if(/^\w{1,}/.test(event.target.value) || event.target.value == ''){
      parentNode.classList.remove('form__field_invalid');
    }else{
      parentNode.classList.add('form__field_invalid');
    }
  }
}
