import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Recipe } from 'src/app/shared/recipe.model';
import { RecipesService } from 'src/app/shared/recipes.service';
import { delay } from 'q';
import { RatingChangeEvent } from 'angular-star-rating';

@Component({
  selector: 'app-recipecard',
  templateUrl: './recipecard.component.html',
  styleUrls: ['./recipecard.component.scss']
})
export class RecipecardComponent implements OnInit, AfterViewInit {
  @Input() recipe: Recipe;
  onRatingChangeResult: RatingChangeEvent;
  constructor(private recipeService: RecipesService) { }

  ngOnInit() { }

  ngAfterViewInit() {
    delay(0);
    this.calculateRating();
  }

  calculateRating() {
    const values: number[] = this.recipeService.getRecipeRating(this.recipe.recipeid);
    const len = values.length;
    const total = values.reduce((sum, current) => sum + current, 0);
    this.recipe.rating = total / len;
    console.log('TOTAL RATING: ' + this.recipe.rating);
  }

  onRatingChange = ($event: RatingChangeEvent) => {
    this.onRatingChangeResult = $event;
    this.recipeService.updateRecipeRating(this.recipe, $event.rating);
  }
}
