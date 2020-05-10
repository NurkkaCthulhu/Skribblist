import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Skribblist';
  wordlists = [];
  devURL = 'http://localhost:8080';

  ngOnInit(): void {
    this.updateList();
  }

  updateList(): void {
    console.log('jee')
    this.wordlists = [];
    fetch(this.devURL + '/lists', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }

    }
    
    )
    .then((resp) => {
      console.log(resp);
      console.log(resp.body);
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
