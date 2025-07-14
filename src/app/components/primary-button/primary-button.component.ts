import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button class="bg-blue-500 text-white w-full border px-5 py-2 rounded-xl shadow-md hover:opacity-90" (click)="btnClicked.emit()">
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
