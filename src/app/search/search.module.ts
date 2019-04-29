import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [SearchboxComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    SearchboxComponent
  ]
})
export class SearchModule { }
