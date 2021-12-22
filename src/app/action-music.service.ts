import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActionMusicService {
  public playMusic$ = new BehaviorSubject<any>('');
  public _playMusic = false;
  public _showPlayCurrent = false;
  public _showPlayList=false;
  constructor() {}
}
