import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <router-outlet />
    <app-header />
  `,
  styles: [],
})
export class AppComponent {
  title = 'Angular E-Commerce Portal';
}
