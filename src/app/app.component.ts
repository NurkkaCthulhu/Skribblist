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
  tooltipContent: string;

  ngOnInit(): void {
    this.updateList();
    this.tooltipContent = 'Click to copy the words';
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

  copyWords(val: string){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.tooltipContent = 'Copied!';

    setTimeout( () => {
      this.tooltipContent = 'Click to copy the words';
    }, 1500);

  }

}
