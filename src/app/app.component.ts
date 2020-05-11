import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Skribblist';
  wordlists = [];
  baseUrl = environment.baseUrl;

  ngOnInit(): void {
    this.updateList();
  }

  updateList(): void {
    console.log('url:' + this.baseUrl);
    this.wordlists = [];
    fetch(this.baseUrl + 'lists')
    .then((resp) => {
      console.log(resp);
      console.log(resp.body);
      return resp.json();
    })
    .then((lists) => {
      console.log(lists);
      lists.forEach((element) => {
        element.words = element.words.split(',');
        this.wordlists.push(element);
      });
      console.log(this.wordlists);
    });
  }

}
