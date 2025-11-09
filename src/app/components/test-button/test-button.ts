import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

@Component({
  selector: 'app-test-button',
  imports: [],
  templateUrl: './test-button.html',
  styleUrl: './test-button.scss',
})
export class TestButton implements AfterViewInit {

  testResult: number = 0;

  test(): void {
    this.testResult++;
  }

  ngAfterViewInit() {
    const swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  }

}
