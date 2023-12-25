import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-the-header',
  templateUrl: './the-header.component.html',
  styleUrl: './the-header.component.css',
})
export class TheHeaderComponent {
  @Output() onChangeComponent = new EventEmitter<'rec' | 'shop'>()

  goToShop() {
    this.onChangeComponent.emit('shop')
  }

  goToRecipe() {
    this.onChangeComponent.emit('rec')
  }
}
