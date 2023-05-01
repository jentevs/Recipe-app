import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  recipes: Recipe[] = [];
  newRecipe: Recipe = {id: 0, title: '', description: '', ingredients: [], instructions: [], imageUrl: ''};
  newIngredient = '';
  newInstruction = '';
  selectedImage!: File;
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes(): void {
    this.recipeService.getRecipes()
      .subscribe(recipes => this.recipes = recipes);
  }

  addRecipe(): void {
    this.recipeService.addRecipe(this.newRecipe)
      .subscribe(recipe => {
        this.recipes.push(recipe);
        this.newRecipe = {id: 0, title: '', description: '', ingredients: [], instructions: [], imageUrl: ''};
      });
  }

  onSubmit(): void {
    this.addRecipe();
  }

  addIngredientField() {
    if (this.newIngredient !== '') {
      this.newRecipe.ingredients.push(this.newIngredient);
      this.newIngredient = '';
    }
  }
  
  removeIngredientField(index: number) {
    this.newRecipe.ingredients.splice(index, 1);
  }

  addInstructionField() {
    // Add the new instruction to the recipe's instructions array
    this.newRecipe.instructions.push(this.newInstruction);
    // Clear the input field
    this.newInstruction = '';
  }
  
  
  removeInstructionField(index: number) {
    this.newRecipe.instructions.splice(index, 1);
  }
  onFileSelected(imageName: string): void {
    this.newRecipe.imageUrl = imageName;
  }
  
  
  
}
