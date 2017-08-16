import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  toggleFocus(event){
    let focus = event.target.parentNode;
    focus.classList.toggle('form__field_focus')
  }

}
