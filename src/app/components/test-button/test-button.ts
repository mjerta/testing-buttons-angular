import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-test-button',
  templateUrl: './test-button.html',
  styleUrls: ['./test-button.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TestButton {

  testResult: number = 0;

  test(): void {
    this.testResult++;
  }

}

