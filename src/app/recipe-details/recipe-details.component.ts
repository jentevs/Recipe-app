import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe!: Recipe;
  id!: number;
  @ViewChild('confirmDeleteTemplate') confirmDeleteTemplate!: TemplateRef<any>;
  private confirmDeleteModal!: NgbModalRef;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.recipeService.getRecipe(this.id)?.subscribe(recipe => this.recipe = recipe);
  }

  onModifyRecipe() {
    let navigationExtras: NavigationExtras = {
      state: {
        recipeId: this.id
      }
    };
    this.router.navigate(['/modify'], navigationExtras);
  }

  confirmDelete() {
    this.confirmDeleteModal = this.modalService.open(this.confirmDeleteTemplate);
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id)?.subscribe(() => {
      this.router.navigate(['/']);
    });
    this.confirmDeleteModal.close();
  }
}
