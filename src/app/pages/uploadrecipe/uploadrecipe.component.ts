import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Recipe } from 'src/app/shared/recipe.model';

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

  constructor(private formBuilder: FormBuilder) { }

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

  // FIXME array does not seem to exist?
  addIngredient(ingredient: string) {
    this.workingRecipe.ingredients.push(ingredient);
  }

  // FIXME array does not seem to exist?
  addStep(instructions: string) {
    this.workingRecipe.directions.push(instructions);
  }
  submit() {
    console.log('submitting recipe');
    // TODO upload to firestore
  }
}
