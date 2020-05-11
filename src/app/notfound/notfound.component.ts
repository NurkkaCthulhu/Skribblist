import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  template: '<h1> Error! URL not found! </h1>',
  styleUrls: ['./notfound.component.css']
})

export class NotfoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
