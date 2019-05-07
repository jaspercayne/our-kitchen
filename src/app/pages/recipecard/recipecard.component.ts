import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/shared/recipe.model';
import { RecipesService } from 'src/app/shared/recipes.service';

@Component({
  selector: 'app-recipecard',
  templateUrl: './recipecard.component.html',
  styleUrls: ['./recipecard.component.scss']
})
export class RecipecardComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
    // this.recipe.title = 'Peanut Butter and Jelly Sandwich';
    // this.recipe.author = 'Admin';
    // this.recipe.category = 'Lunch';
    // this.recipe.ingredients = ['bread', 'peanut butter', 'jelly'];
    // this.recipe.directions = ['spread peanut butter on one slice', 'spread jelly on the other', 'stick them together'];
  }

  ngAfterViewInit() {
    this.calculateRating();
  }

  calculateRating() {
    const values: number[] = this.recipeService.getRecipeRating(this.recipe.recipeid);
    const len = values.length;
    const total = values.reduce((sum, current) => sum + current, 0);
    this.recipe.rating = total/len;
    console.log('TOTAL RATING: ' + this.recipe.rating);
  }
}
