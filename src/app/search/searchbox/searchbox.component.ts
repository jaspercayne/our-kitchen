import { Component, OnInit } from '@angular/core';
import { Subject, Observable, combineLatest } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchboxComponent implements OnInit {

  searchTerm: string;

  startAt = new Subject();
  endAt = new Subject();

  startObs = this.startAt.asObservable();
  endObs = this.endAt.asObservable();

  results;

  date: Observable<any[]>;

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    combineLatest(this.startObs, this.endObs).subscribe((value) => {
      this.searchByTitle(value[0], value[1]).subscribe((results) => {
        this.results = results;
      });
    });
  }

  search($event) {
    let q = $event.target.value;
    this.startAt.next(q !== '' ? q : '');
    this.endAt.next(q !== '' ? + '/utf8ff' : '');
  }

  searchByTitle(start, end) {
    return this.db.collection('/recipes', ref => ref.limit(4).orderBy('title').startAt(start)).valueChanges();
  }

}
