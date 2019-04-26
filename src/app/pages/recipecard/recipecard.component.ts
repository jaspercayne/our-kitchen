import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipecard',
  templateUrl: './recipecard.component.html',
  styleUrls: ['./recipecard.component.scss']
})
export class RecipecardComponent implements OnInit {
  title: string;
  author: string;
  category: string;
  ingredients: string[];
  directions: string[];

  constructor() { }

  ngOnInit() {
    this.title = 'Peanut Butter and Jelly Sandwich';
    this.author = 'Admin';
    this.category = 'Lunch';
    this.ingredients = ['bread', 'peanut butter', 'jelly'];
    this.directions = ['spread peanut butter on one slice', 'spread jelly on the other', 'stick them together'];
  }

}
