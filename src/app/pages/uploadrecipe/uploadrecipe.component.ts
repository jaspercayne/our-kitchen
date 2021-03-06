import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Recipe } from 'src/app/shared/recipe.model';
import { RecipeService } from 'src/app/shared/recipes.service';
import { AuthService } from 'src/app/auth/auth.service';



@Component({
  selector: 'app-uploadrecipe',
  templateUrl: './uploadrecipe.component.html',
  styleUrls: ['./uploadrecipe.component.scss']
})
export class UploadrecipeComponent implements OnInit {
  isLinear = true;
  titleFormGroup: FormGroup;
  ingredientsFormGroup: FormGroup;
  directionsFormGroup: FormGroup;
  categoryFormGroup: FormGroup;
  workingRecipe: Recipe;

  categories = [
    'Breakfast',
    'Lunch',
    'Dinner',
    'Snack'
  ];


  constructor(private formBuilder: FormBuilder, private recipeService: RecipeService, public auth: AuthService) { }

  ngOnInit() {
    this.titleFormGroup = this.formBuilder.group({
      titleCtrl: ['', Validators.required]
    });
    this.ingredientsFormGroup = this.formBuilder.group({
      ingCtrl: ['', Validators.required]
    });
    this.directionsFormGroup = this.formBuilder.group({
      stepCtrl: ['', Validators.required]
    });
    this.categoryFormGroup = this.formBuilder.group({
      categoryCtrl: ['', Validators.required]
    });

    this.workingRecipe = new Recipe();
    this.workingRecipe.ingredients = new Array();
    this.workingRecipe.directions = new Array();
  }

  setTitle(newTitle: string) {
    this.workingRecipe.title = newTitle;
  }

  setCategory(newCategory: string) {
    this.workingRecipe.category = newCategory;
  }

  setAuthor(newAuthor: string) {
    this.workingRecipe.author = newAuthor;
  }

  addIngredient(ingredient: string) {
    this.workingRecipe.ingredients.push(ingredient);
  }

  addStep(instructions: string) {
    this.workingRecipe.directions.push(instructions);
  }

  deleteIngredient(ingredient: string) {
    this.workingRecipe.ingredients.splice(this.workingRecipe.ingredients.indexOf(ingredient), 1);
  }

  deleteStep(step: string) {
    this.workingRecipe.directions.splice(this.workingRecipe.directions.indexOf(step), 1);
  }

  submit() {
    this.recipeService.uploadRecipe(this.workingRecipe);
  }

  resetForm() {
    this.workingRecipe.ingredients = new Array();
    this.workingRecipe.directions = new Array();
  }
}
