import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button (click)="handleButtonClick()">
      <!-- We are listening for the signal's value -->
      {{ label() }} 
    </button>
  `,
  styles: ``
})
export class PrimaryButtonComponent {
  label = input(''); // the type we expect is a string

  btnClicked = output();

  // Event handler for button click (a.k.a onClick)
  handleButtonClick() {
    this.btnClicked.emit();
  }

}
