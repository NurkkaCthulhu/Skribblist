import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-public-lists',
  templateUrl: './public-lists.component.html',
  styleUrls: ['./public-lists.component.css']
})
export class PublicListsComponent implements OnInit {
  wordlists = [];
  baseUrl = environment.baseUrl;
  tooltipContent: string;

  constructor() { }

  ngOnInit(): void {
    this.updateList();
    this.tooltipContent = 'Click to copy the words';
  }

  updateList(): void {
    this.wordlists = [];
    fetch(this.baseUrl + 'lists')
    .then((resp) => {
      return resp.json();
    })
    .then((lists) => {
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
