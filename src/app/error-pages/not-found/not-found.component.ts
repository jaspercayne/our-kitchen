import { Component, OnInit } from '@angular/core';


const errors = ['Page not found', 'Something went wrong', 'It broke!'];

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  errorMsg: string;
  constructor() { }

  ngOnInit() {
    this.errorMsg = errors[Math.floor(Math.random() * errors.length)];
  }
}
