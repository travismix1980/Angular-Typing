import { Component, OnInit } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-gamescreen',
  templateUrl: './gamescreen.component.html',
  styleUrls: ['./gamescreen.component.css']
})
export class GamescreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  generateNewSentence(): string {
    return lorem.sentence();
  }

}
