import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-modify-recipe',
  templateUrl: './modify-recipe.component.html',
  styleUrls: ['./modify-recipe.component.css']
})
export class ModifyRecipeComponent implements OnInit {
  recipe!: Recipe;
  id!: number;
  newIngredient = '';
  newInstruction = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService
  ) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.recipeService.getRecipe(this.id)?.subscribe(recipe => {
      this.recipe = recipe;
    });
  }

  addIngredient() {
    if (this.newIngredient) {
      this.recipe.ingredients.push(this.newIngredient);
      this.newIngredient = '';
    }
  }

  deleteIngredient(i: number) {
    this.recipe.ingredients.splice(i, 1);
  }

  addInstructions() {
    if (this.newInstruction.trim() !== '') {
      this.recipe.instructions.push(this.newInstruction.trim());
      this.newInstruction = '';
    }
  }
  

  deleteInstructions(index: number): void {
    this.recipe.instructions.splice(index, 1);
  }

  onSubmit(): void {
  this.recipeService.updateRecipe(this.recipe).subscribe(updatedRecipe => {
    this.recipe = updatedRecipe;
    this.router.navigate(['/recipes', this.recipe.id]);
  });

}

  onFileSelected(imageName: string): void {
    this.recipe.imageUrl = imageName;
  }
  
}
