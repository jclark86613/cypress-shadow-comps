import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-test-shadow',
  standalone: true,
  imports: [],
  templateUrl: './test-shadow.component.html',
  styleUrl: './test-shadow.component.scss',
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class TestShadowComponent {
  @Output() click = new EventEmitter();

}
