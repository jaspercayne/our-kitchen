import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { NgAisModule } from 'angular-instantsearch';

@NgModule({
  declarations: [SearchboxComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule,
    NgAisModule
  ],
  exports: [
    SearchboxComponent
  ]
})
export class SearchModule { }
