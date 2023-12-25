import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('ing 1', 2),
    new Ingredient('ing 2', 4),
    new Ingredient('ing 3', 1),
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

  addNewIngredient({name, count}: Ingredient) {
    this.ingredients.push({
      name,
      count,
    })
  }
}
