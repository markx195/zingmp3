import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as moment from "moment";
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';

@Component({
  selector: 'app-listplay',
  templateUrl: './listplay.component.html',
  styleUrls: ['./listplay.component.scss']
})
export class ListplayComponent implements OnInit {
  audioObj = new Audio();
  audioEvents = [
    "ended",
    "error",
    "play",
    "playing",
    "pause",
    "timeupdate",
    "canplay",
    "loadedmetadata",
    "loadstart"
  ];

  // files=[
  //   {
  //     url: './assets/1.mp3',
  //     name: 'mySong1'
  //   },
  //   {
  //     url: './assets/2.mp3',
  //     name: 'mySong2'
  //   },
  //   {
  //     url: './assets/3.mp3',
  //     name: 'mySong3'
  //   }
  // ];
  audioList = [
    {
      url: './assets/1.mp3',
      title: "Smaple 1",
      cover: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_webp/cover/7/7/8/8/778810b0e5848b1e38042e07be1ebe77.jpg"
    },
    {
      url: './assets/2.mp3',
      title: "Sample 2",
      cover: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_webp/cover/a/7/5/a/a75a95edec29eefcee8b359a29228e09.jpg"
    },
    {
      url: './assets/3.mp3',
      title: "Sample 3",
      cover: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_webp/cover/c/5/7/4/c5744d0d3e19f3cbb8e63c05f923ec3c.jpg"
    }
  ];
  currentTime = '00:00';
  duration = '00:00';
  seek=0;

  streamObserver(url:string){
    return new Observable(obsever =>{
      // Play audio
      this.audioObj.src = url;
      this.audioObj.load();
      this.audioObj.play();

      const handler = (event: Event) => {
        this.seek = this.audioObj.currentTime;
        this.duration = this.formatTime( this.audioObj.duration);
        this.currentTime = this.formatTime(this.audioObj.currentTime);
      };
      this.addEvent(this.audioObj, this.audioEvents, handler); 
      return () =>{
        this.audioObj.pause();
        this.audioObj.currentTime=0;
        this.removeEvent(this.audioObj, this.audioEvents, handler);
      }
    })
  }
  
  addEvent(obj:any,events:any,handler:any) {
    events.forEach((event: any) => {
      obj.addEventListener(event,handler)
    });
  }

  removeEvent(obj:any,events:any,handler:any){
    events.forEach((event: any) => {
      obj.removeEventListener(event,handler)
    });
  }

  setSeekTo(ev:any){
    this.audioObj.currentTime = ev.target.value;
  }

  setVolume(ev:any){
    this.audioObj.volume = ev.target.value;
    console.log(ev.target.value);
  }

  openFile(url:string){
    this.streamObserver(url).subscribe(event => {});
    console.log(url)
  }


  play() { 
    this.audioObj.play();
    console.log('clickplaybtn');
  }
  stop(){
    this.audioObj.pause();
    this.audioObj.currentTime=0;
    console.log('clickstopbtn');
  }
  pause(){
    this.audioObj.pause();
    console.log('clickpausebtn');
  }

  ngOnInit(): void {
  }

  formatTime(time: number, format: string = "mm:ss") {
    const momentTime = time * 1000;
    return moment.utc(momentTime).format(format);
  }
}

