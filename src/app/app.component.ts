import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestShadowComponent } from './test-shadow/test-shadow.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestShadowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cypress-shadow-comps';
}
