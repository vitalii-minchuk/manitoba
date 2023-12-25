import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})
export class RecipesListComponent {
  @Input() recipes: Recipe[] = []
  @Output() selectRecipe = new EventEmitter<number>()

  onSelectRecipe(id: number) {
    this.selectRecipe.emit(id)
  }
}
