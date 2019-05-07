import { Injectable, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/recipe.model';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AuthService } from '../auth/auth.service';

interface RecipeObject extends Recipe {
  id: string;
}
interface RecipeRatings {
  one: number;
  two: number;
  three: number;
  four: number;
  five: number;
}

@Injectable({
  providedIn: 'root'
})
export class RecipesService implements OnInit {
  recipeCollection: AngularFirestoreCollection<Recipe>;
  recipes: any;

  recipeDoc: AngularFirestoreDocument<Recipe>;
  recipe: Observable<Recipe>;

  constructor(private afs: AngularFirestore, private auth: AuthService) { }

  ngOnInit(): void {
    this.recipeCollection = this.afs.collection('/recipes');
    this.recipes = this.recipeCollection.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as RecipeObject;
          const id = a.payload.doc.id;
          return { id, data };
        });
      });
  }

  /**
   * createRecipe
   */
  public createRecipe(workingRecipe: Recipe) {
    this.afs.collection('recipes').add({
      title: workingRecipe.title,
      author: this.auth.afAuth.auth.currentUser.displayName,
      category: workingRecipe.category,
      ingredients: workingRecipe.ingredients,
      directions: workingRecipe.directions
    });
  }

  public uploadRecipe(workingRecipe: Recipe) {
    let newid = this.afs.createId();
    console.log(newid);
    this.afs.collection('recipes').doc(newid).set({
      recipeid: newid,
      title: workingRecipe.title,
      author: this.auth.afAuth.auth.currentUser.displayName,
      category: workingRecipe.category,
      ingredients: workingRecipe.ingredients,
      directions: workingRecipe.directions
    });
  }

  /**
   * getRecipe
   */
  public getRecipe(recipeId) {
    return this.afs.doc('/recipes/' + recipeId).valueChanges();
  }

  val: number[] = [];

  public getRecipeRating(recipeId): number[] {
    this.afs.doc('/ratings/' + recipeId)
      .valueChanges()
      .subscribe(res => {
        this.val[0] = res['one'];
        this.val[1] = res['two'] * 2;
        this.val[2] = res['three'] * 3;
        this.val[3] = res['four'] * 4;
        this.val[4] = res['five'] * 5;
      });
    return this.val;
  }

  /**
   * getRecipes
   */
  public getRecipes() {
    return this.afs.collection('/recipes').valueChanges();
  }

  /**
   * updateRecipe
   */
  public updateRecipe(recipe) {
    console.log(recipe + ' updated');
    // TODO fill in update function
    this.recipeCollection.doc(recipe).set({ recipe }).then(() => {
      console.log('Document successfully updated!');
    }).catch((error) => {
      console.error('Error updating document: ', error);
    });
  }

  /**
   * deleteRecipe
   */
  public deleteRecipe(recipeId: string) {
    this.recipeCollection.doc(recipeId).delete().then(() => {
      console.log('Document successfully deleted!');
    }).catch((error) => {
      console.error('Error removing document: ', error);
    });
  }
}
