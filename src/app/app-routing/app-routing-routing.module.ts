import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListRecipesComponent } from '../list-recipes/list-recipes.component';
import { RecipeDetailsComponent } from '../recipe-details/recipe-details.component';
import { AddRecipeComponent } from '../add-recipe/add-recipe.component';
import { ModifyRecipeComponent } from '../modify-recipe/modify-recipe.component';
import { SearchRecipeComponent } from '../search-recipe/search-recipe.component';

const routes: Routes = [
  { path: '', component: ListRecipesComponent },
  { path: 'home', component: ListRecipesComponent },
  { path: 'recipes', component: ListRecipesComponent  },
  { path: 'recipes/add', component: AddRecipeComponent },
  { path: 'recipes/:id', component: RecipeDetailsComponent },
  { path: 'modify/:id', component: ModifyRecipeComponent },
  { path: 'recipes/search', component: SearchRecipeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
