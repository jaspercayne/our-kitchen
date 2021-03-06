import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { Firebase } from 'src/firebase';

import { RecipeService } from './shared/recipes.service';
import { AuthService } from './auth/auth.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StarRatingModule } from 'angular-star-rating';

import { HomeComponent } from './pages/home/home.component';
import { RecipecardComponent } from './pages/recipecard/recipecard.component';
import { UploadrecipeComponent } from './pages/uploadrecipe/uploadrecipe.component';
import { AuthModule } from './auth/auth.module';
import { ErrorPagesModule } from './error-pages/error-pages.module';
import { SearchModule } from './search/search.module';
import { HeaderComponent } from './navigation/header/header.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { BrowseRecipesComponent } from './pages/browse-recipes/browse-recipes.component';
import { RecipeDetailComponent } from './pages/recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipecardComponent,
    UploadrecipeComponent,
    HeaderComponent,
    FooterComponent,
    SidenavListComponent,
    BrowseRecipesComponent,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(Firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AuthModule,
    ErrorPagesModule,
    SearchModule,
    StarRatingModule.forRoot()
  ],
  providers: [RecipeService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
