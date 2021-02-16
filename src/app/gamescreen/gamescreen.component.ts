import { Component, OnInit } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-gamescreen',
  templateUrl: './gamescreen.component.html',
  styleUrls: ['./gamescreen.component.css'],
})
export class GamescreenComponent implements OnInit {
  randomText = lorem.sentence();
  inputValue = '';
  displaySuccess = false;

  constructor() {}

  ngOnInit(): void {}

  onInput(value: string): void {
    this.inputValue = value;
    if (this.inputValue === this.randomText) {
      this.displaySuccess = true;
    } else {
      this.displaySuccess = false;
    }
  }

  compare(letter: string, userLetter?: string): string {
    if (!userLetter) {
      return 'pending';
    }
    if (userLetter === letter) {
      return 'green';
    }
    if (userLetter !== letter) {
      return 'red';
    }
  }
}
