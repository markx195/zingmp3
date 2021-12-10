import { Component,ViewEncapsulation, OnInit } from '@angular/core';
import SwiperCore, { EffectCoverflow, Pagination,Navigation } from "swiper";
SwiperCore.use([EffectCoverflow, Pagination]);
SwiperCore.use([Pagination, Navigation]);


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent {
  title = 'ZingMp3';
}

