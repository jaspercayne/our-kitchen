import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './pages/home/home.component';
import { RecipecardComponent } from './pages/recipecard/recipecard.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UploadrecipeComponent } from './pages/uploadrecipe/uploadrecipe.component';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { Firebase } from 'src/firebase';
import { RecipesService } from './shared/recipes.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipecardComponent,
    NotFoundComponent,
    UploadrecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(Firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [RecipesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
