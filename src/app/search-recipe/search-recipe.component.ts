import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-search-recipe',
  templateUrl: './search-recipe.component.html',
  styleUrls: ['./search-recipe.component.css']
})
export class SearchRecipeComponent {
  @Input() searchString = '';
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes(): void {
    this.recipeService.getRecipes()
      .subscribe(recipes => this.recipes = recipes);
  }

  filterRecipes(): Recipe[] {
    if (this.searchString.trim()) {
      return this.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(this.searchString.toLowerCase())
      );
    } else {
      return [];
    }
  }
}
