import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'manitoba';
  shownComponent: 'shop' | 'rec' = 'rec'

  setShownComponent(component: 'shop' | 'rec') {
    console.log(component)
    this.shownComponent = component
  }
}
