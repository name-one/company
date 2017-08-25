import { Component, OnInit, Input, ElementRef, AfterViewInit, AfterContentInit } from '@angular/core';
import $ from "jquery";
import 'slick-carousel/slick/slick';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, AfterContentInit{
  @Input() options: any;

   $element: any;

   defaultOptions: any = {
     autoplay: true,
     autoplaySpeed: 5000,
     slidesToShow: 3,
     nextArrow: '<i class="fa fa-angle-right slider__arrow slider__arrow_next" aria-hidden="true"></i>',
     prevArrow: '<i class="fa fa-angle-left slider__arrow" aria-hidden="true"></i>',
     responsive: [
       {
         breakpoint: 992,
         settings: {
           slidesToShow: 2
         }
       },
       {
         breakpoint: 768,
         settings: {
           slidesToShow: 1
         }
       }
     ]
   };

   constructor(private el: ElementRef) {
   }
   ngOnInit(){

   }
   ngAfterContentInit() {
       for (var key in this.options) {
           this.defaultOptions[key] = this.options[key];
       }

       this.$element = $(this.el.nativeElement).slick(this.defaultOptions);
   }

}
