import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/shared/recipes.service';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/shared/recipe.model';

@Component({
  selector: 'app-browse-recipes',
  templateUrl: './browse-recipes.component.html',
  styleUrls: ['./browse-recipes.component.scss']
})
export class BrowseRecipesComponent implements OnInit {
  recipes;

  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

}
