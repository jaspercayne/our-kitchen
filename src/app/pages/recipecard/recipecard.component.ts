import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/shared/recipe.model';

@Component({
  selector: 'app-recipecard',
  templateUrl: './recipecard.component.html',
  styleUrls: ['./recipecard.component.scss']
})
export class RecipecardComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit() {
    // this.recipe.title = 'Peanut Butter and Jelly Sandwich';
    // this.recipe.author = 'Admin';
    // this.recipe.category = 'Lunch';
    // this.recipe.ingredients = ['bread', 'peanut butter', 'jelly'];
    // this.recipe.directions = ['spread peanut butter on one slice', 'spread jelly on the other', 'stick them together'];
  }

}
