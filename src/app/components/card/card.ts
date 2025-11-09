import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/effect-cards';

register();
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrls: ['./card.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Card {

}
