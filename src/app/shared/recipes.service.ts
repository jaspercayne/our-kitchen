import { Injectable, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/recipe.model';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AuthService } from '../auth/auth.service';

interface RecipeObject extends Recipe {
  id: string;
}

@Injectable({
  providedIn: 'root'
})
export class RecipeService implements OnInit {

  constructor(private afs: AngularFirestore, private auth: AuthService) { }
  recipeCollection: AngularFirestoreCollection<Recipe>;
  recipes: any;

  recipeDoc: AngularFirestoreDocument<Recipe>;
  recipe: Observable<Recipe>;
  rdoc;

  val: number[] = [];

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
    const newid = this.afs.createId();
    console.log(newid);
    this.afs.collection('recipes').doc(newid).set({
      recipeid: newid,
      title: workingRecipe.title,
      author: this.auth.afAuth.auth.currentUser.displayName,
      category: workingRecipe.category,
      ingredients: workingRecipe.ingredients,
      directions: workingRecipe.directions,
      rating: -1
    });
    this.afs.collection('ratings/').doc(newid).set({
      one: 0,
      two: 0,
      three: 0,
      four: 0,
      five: 0
    });
  }

  public getRecipe(recipeId) {
    return this.afs.doc('/recipes/' + recipeId).valueChanges();
  }

  public getRecipeRating(recipeId): number[] {
    if (recipeId !== null) {
      this.afs.doc('/ratings/' + recipeId)
        .valueChanges()
        .subscribe(res => {
          this.val[0] = res['one'.toString()];
          this.val[1] = res['two'.toString()];
          this.val[2] = res['three'.toString()];
          this.val[3] = res['four'.toString()];
          this.val[4] = res['five'.toString()];
        });
      return this.val;
    }
  }

  public updateRecipeRating(recipe, newRating) {
    let myRatings: number[] = [0, 0, 0, 0, 0];
    myRatings = this.getRecipeRating(recipe.recipeid);
    if (myRatings !== null) {
      switch (newRating) {
        case 1:
          const one = myRatings[0] + 1;
          this.afs.doc('/ratings/' + recipe.recipeid).update({ one });
          break;
        case 2:
          const two = myRatings[1] + 1;
          this.afs.doc('/ratings/' + recipe.recipeid).update({ two });
          break;
        case 3:
          const three = myRatings[2] + 1;
          this.afs.doc('/ratings/' + recipe.recipeid).update({ three });
          break;
        case 4:
          const four = myRatings[3] + 1;
          this.afs.doc('/ratings/' + recipe.recipeid).update({ four });
          break;
        case 5:
          const five = myRatings[4] + 1;
          this.afs.doc('/ratings/' + recipe.recipeid).update({ five });
          break;
        default:
          break;
      }
    }
  }

  public getRecipes() {
    return this.afs.collection('/recipes').valueChanges();
  }

  public updateRecipe(recipe: Recipe) {
    this.recipeCollection.doc(recipe.recipeid).set({ recipe }).then(() => {
      console.log(recipe.title + ' successfully updated!');
    }).catch((error) => {
      console.error('Error updating document: ', error);
    });
  }

  public deleteRecipe(recipeId: string) {
    this.recipeCollection.doc(recipeId).delete().then(() => {
      console.log('Document successfully deleted!');
    }).catch((error) => {
      console.error('Error removing document: ', error);
    });
  }
}
