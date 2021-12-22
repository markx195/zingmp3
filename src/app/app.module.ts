import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { SwiperModule } from "swiper/angular";
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { BoxMainpageComponent } from './boxMainpage/box-mainpage.component';
import { ListplayComponent } from './listplay/listplay.component';
import { DetailComponent } from './detail/detail.component';
import { BoxContentComponent } from './box-content/box-content.component';
import { Chartmp3Component } from './chartmp3/chartmp3.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    HeaderComponent,
    BoxMainpageComponent,
    ListplayComponent,
    DetailComponent,
    BoxContentComponent,
    Chartmp3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    SwiperModule,
    HighchartsChartModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
