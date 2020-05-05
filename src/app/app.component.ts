import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Skribblist';
  wordlists = [];

  ngOnInit(): void {
    this.updateList();
  }

  updateList(): void {
    this.wordlists = [];
    fetch('/lists')
    .then((resp) => resp.json())
    .then((lists) => {
      console.log(lists);
      lists.forEach((element) => {
        this.wordlists.push(element);
      });
    });
  }

}
