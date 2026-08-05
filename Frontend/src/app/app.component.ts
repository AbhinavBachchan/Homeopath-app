import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="app-root">
      <h1>{{ title }}</h1>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`.app-root { padding: 1rem; }`]
})
export class AppComponent {
  title = 'Homeopath App';
}
