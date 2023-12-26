import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(1, 'name test 1', 'desc test 1', 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D'),
    new Recipe(2, 'name test 2', 'desc test 2', 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2R8ZW58MHx8MHx8fDA%3D'),
    new Recipe(3, 'name test 3', 'desc test 3', 'https://images.unsplash.com/photo-1568600891621-50f697b9a1c7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGZvb2R8ZW58MHx8MHx8fDA%3D'),
  ]
  selectedRecipe: Recipe | null = null

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelectRecipe(id: number): void {
    const recipe = this.recipes.find(el => el.id === id)
    this.selectedRecipe = recipe ?? null
  }
}
