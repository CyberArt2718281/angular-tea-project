import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  isShow: boolean = false;
  isDestroy: boolean = false;
  slideConfig = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  slides = [
    { img: 'assets/images/tea1.jpg' },
    { img: 'assets/images/tea2.jpg' },
    { img: 'assets/images/tea3.jpg' },
  ];
  trackByFn(index: number) {
    return index;
  }
}
