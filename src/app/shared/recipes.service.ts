import { Injectable, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/recipe.model';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AuthService } from './auth.service';

interface RecipeObject extends Recipe {
  id: string;
}

@Injectable({
  providedIn: 'root'
})
export class RecipesService implements OnInit {
  recipeCollection: AngularFirestoreCollection<Recipe>;
  recipes: any;

  constructor(private afs: AngularFirestore, private auth: AuthService) { }

  ngOnInit(): void {
    this.recipeCollection = this.afs.collection('recipes');
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

  /**
   * getRecipe
   */
  public getRecipe(recipeId) {
    this.recipes.doc(recipeId).get()
      .then(doc => {
        if (!doc.exists) {
          console.log('No such document!');
        } else {
          console.log('Document data:', doc.data());
        }
      })
      .catch(err => {
        console.log('Error getting document', err);
      });
  }

  /**
   * getRecipes
   */
  public getRecipes() {
    this.recipes.collection('recipes').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          console.log(doc.id, '=>', doc.data());
        });
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });
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
  public deleteRecipe(recipeId: string) {
    this.recipeCollection.doc(recipeId).delete().then(() => {
      console.log('Document successfully deleted!');
    }).catch((error) => {
      console.error('Error removing document: ', error);
    });
  }
}
