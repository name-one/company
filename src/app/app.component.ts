import { Component, OnInit } from '@angular/core';
import { nodeForEach } from './common/functions';
import $ from "jquery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  hiddenMenu: string = 'nav-container_hidden';
  ngOnInit(){
    this.hideMenu();
  }
  hideMenu(pause?:boolean){
    let time: number = 3000
    if(pause){
      time = 0;
    }
    let menu = document.querySelector('.nav-container');
    let timeOut = setTimeout( ()=>{
      menu.classList.add(this.hiddenMenu);
      clearTimeout(timeOut);
    }, time)
  }
  showMenu(){
    let menu = document.querySelector('.nav-container');
    menu.classList.remove(this.hiddenMenu);
  }
  toggleScreen(event){
    let target = event.target;
    let screen = $('.screen');
    let wrapper = document.querySelector('.wrapper');
    if(target.tagName == 'A'){
      target = target.parentNode;
    }
    let width = $('.screen').width();
    let menuItems = document.querySelectorAll('.main-menu__item');
    let curIndex: number = 0;
    nodeForEach(menuItems, function(item, index){
      if(item==target){
        item.classList.add('main-menu__item_active');
        curIndex = index;
        screen.removeClass('screen_active');
        screen.eq(index).addClass('screen_active');
      }else{
        item.classList.remove('main-menu__item_active');
      }

    })
    screen.each( function(){
      if($(this).index() < curIndex){
        $(this).animate({ marginLeft: `-${width}px`})
      }else{
        $(this).animate({ marginLeft: 0 })
      }
    })

  }
  switchToContactPage(){
    let menuItems = document.getElementsByClassName('main-menu__item');
    let click = new Event('click');
    nodeForEach( menuItems, (item)=>{
      if(item.innerHTML.indexOf('Contacts') != -1){
        item.dispatchEvent(click);
      }
    })
  }
}
