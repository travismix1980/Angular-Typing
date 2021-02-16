import { Component, OnInit } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-gamescreen',
  templateUrl: './gamescreen.component.html',
  styleUrls: ['./gamescreen.component.css'],
})
export class GamescreenComponent implements OnInit {
  randomText = lorem.sentence();
  inputValue: string;

  constructor() {}

  ngOnInit(): void {}

  onInput(value: string): void {
    this.inputValue = value;
    // DEBUG: console.log(this.inputValue);
  }

  // generateNewSentence(): string {
  //   return lorem.sentence();
  // }
}
