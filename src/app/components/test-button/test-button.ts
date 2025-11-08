import { Component } from '@angular/core';

@Component({
  selector: 'app-test-button',
  imports: [],
  templateUrl: './test-button.html',
  styleUrl: './test-button.scss',
})
export class TestButton {

  testResult: number = 0;

  test(): void {
    this.testResult++;
  }

}
