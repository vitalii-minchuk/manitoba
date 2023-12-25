import { Component, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @Output() add = new EventEmitter<Ingredient>()
  name = ''
  count = null

  onAddNew() {
    if (!this.name) return

    this.add.emit({
      name: this.name,
      count: this.count ?? 0
    })
  }

  onClear() {
    this.count = null
    this.name = ''
  }
}
