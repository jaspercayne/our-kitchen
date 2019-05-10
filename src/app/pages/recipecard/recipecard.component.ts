import { Component, OnInit, Input, AfterViewInit, AfterContentInit, OnChanges } from '@angular/core';
import { Recipe } from 'src/app/shared/recipe.model';
import { RecipeService } from 'src/app/shared/recipes.service';
import { delay } from 'q';
import { RatingChangeEvent } from 'angular-star-rating';

@Component({
  selector: 'app-recipecard',
  templateUrl: './recipecard.component.html',
  styleUrls: ['./recipecard.component.scss']
})
export class RecipecardComponent implements OnInit, OnChanges {
  @Input() recipe: Recipe;
  onRatingChangeResult: RatingChangeEvent;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    delay(0);
  }

  ngOnChanges() {
    if (this.recipe != null) {
      this.calculateRating();
    }
  }

  calculateRating() {
    const values: number[] = this.recipeService.getRecipeRating(this.recipe.recipeid);
    const len = values.length;
    const total = values[0] + (values[1] * 2) + (values[2] * 3) + (values[3] * 4) + (values[4] * 5);
    this.recipe.rating = total / len;
  }

  onRatingChange = ($event: RatingChangeEvent) => {
    if (this.recipe !== null) {
      this.onRatingChangeResult = $event;
      this.recipeService.updateRecipeRating(this.recipe, $event.rating);
    }
  }
}
