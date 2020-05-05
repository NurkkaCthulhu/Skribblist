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
    console.log('jee')
    this.wordlists = [];
    fetch('/lists')
    .then((resp) => {
      console.log(resp);
      return resp.json();
    })
    .then((lists) => {
      console.log(lists);
      lists.forEach((element) => {
        this.wordlists.push(element);
      });
    });
  }

}
