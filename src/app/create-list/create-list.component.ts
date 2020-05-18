import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import SkribblList from '../SkribblList';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css']
})
export class CreateListComponent implements OnInit {

  baseUrl = environment.baseUrl;
  userInput: SkribblList = {words: '',
                          code: 'coolCodeHere',
                          info: '',
                          list_name: '',
                          public: true
                        };
  newWord: string = '';
  allWords = [];

  constructor() { }

  ngOnInit(): void {
  }

  disableSubmit() {
    return !(this.allWords.length >= 4 && this.userInput.list_name.length > 0);
  }

  addWordToList() {
    if (this.allWords.includes(this.newWord)) {
      alert("Can't add a word that's already on the list.");
    } else {
      this.allWords.push(this.newWord.toLowerCase());
      this.newWord = '';
    }
  }

  removeFromWordList(word: string) {
    this.allWords = this.allWords.filter(e => e !== word);
  }

  createList() {
    const allWordsAsString = this.allWords.join(',');
    this.userInput.words = allWordsAsString;
    fetch(this.baseUrl + 'lists', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.userInput),
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log('Success; posted a list called:', data.name);
      this.userInput = {words: '',
                          code: 'coolCodeHere',
                          info: '',
                          list_name: '',
                          public: true
                        };
      this.newWord = '';
      this.allWords = [];
      alert('List posted successfully!');
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  deleteList() {
    fetch(this.baseUrl + 'lists/16', {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(res => console.log(res));
  }

}
