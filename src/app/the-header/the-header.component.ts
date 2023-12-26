import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-the-header',
  templateUrl: './the-header.component.html',
  styleUrl: './the-header.component.css',
})
export class TheHeaderComponent {
  constructor(private router: Router) {}

  goToShop() {
    this.router.navigate(['shop'])
  }

  goToRecipe() {
    this.router.navigate([''])
  }
}
