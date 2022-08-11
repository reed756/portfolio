import { Component, ViewChild } from '@angular/core';
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() { }

  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  onSwiper([swiper]) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
    this.onSwiper([this.swiper]);
  }

  setVertical() {
    let width = screen.width;
    if (width < 576) {
      return 'bottom';
    } else {
      return 'center';
    }
  }

  getCurrentSlide() {

  }

}
