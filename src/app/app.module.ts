import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { ListRecipesComponent } from './list-recipes/list-recipes.component';
import { RouterModule } from '@angular/router';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { AppRoutingModule } from './app-routing/app-routing-routing.module';
import { ModifyRecipeComponent } from './modify-recipe/modify-recipe.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchRecipeComponent } from './search-recipe/search-recipe.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRecipeComponent,
    ListRecipesComponent,
    RecipeDetailsComponent,
    ModifyRecipeComponent,
    SearchRecipeComponent,
    ImageUploadComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
