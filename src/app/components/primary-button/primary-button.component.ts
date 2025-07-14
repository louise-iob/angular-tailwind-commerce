import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button (click)="btnClicked.emit()">
      <!-- We are listening for the signal's value -->
      {{ label() }} 
    </button>
  `,
  styles: ``
})
export class PrimaryButtonComponent {
  label = input(''); // the type we expect is a string

  btnClicked = output();

}
