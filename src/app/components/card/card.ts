import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrls: ['./card.scss'],
})
export class Card implements AfterViewInit {

  ngAfterViewInit() {
const swiper = new Swiper('.swiper', {
      effect: "cards",
      loop: true,
      grabCursor: true,
      initialSlide: 0,
      cardsEffect: {
        perSlideOffset: 20,
        perSlideRotate: 10,
        rotate: true,
        slideShadows: true
      }
    });
    swiper.slidePrev();
  }

}
