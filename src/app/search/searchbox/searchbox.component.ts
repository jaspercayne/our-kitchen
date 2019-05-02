import { Component, Inject, forwardRef, Input } from '@angular/core';
import { BaseWidget, NgAisInstantSearch } from 'angular-instantsearch';
import { Subject, Observable, combineLatest } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { connectAutocomplete } from 'instantsearch.js/es/connectors';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchboxComponent  {
  state: {
    query: string;
    refine: Function;
  };

  results;

  date: Observable<any[]>;

  constructor(private afs: AngularFirestore) { }
}
