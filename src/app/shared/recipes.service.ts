import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor() { }

  /**
   * createRecipe
   */
  public createRecipe() {
    console.log('recipe create called');
    // TODO fill in create function
  }

  /**
   * getRecipe
   */
  public getRecipe(recipeId) {
    console.log(recipeId);
    // TODO fill in get function
  }

  /**
   * getRecipes
   */
  public getRecipes() {
    console.log('all recipes');
    // TODO fill in get all function
  }

  /**
   * updateRecipe
   */
  public updateRecipe(recipeId) {
    console.log(recipeId + ' updated');
    // TODO fill in update function
  }

  /**
   * deleteRecipe
   */
  public deleteRecipe(recipeId) {
    console.log(recipeId + ' deleted');
    // TODO fill in delete function
  }
}
