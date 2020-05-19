import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import SkribblList from '../SkribblList';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css']
})
export class CreateListComponent implements OnInit {

  baseUrl = environment.baseUrl;
  userInput: SkribblList = {words: '',
                          code: '',
                          info: '',
                          list_name: '',
                          public: true
                        };
  newWord: string = '';
  allWords = [];

  constructor(private router: Router) { }

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
      this.userInput = {words: '',
                          code: '',
                          info: '',
                          list_name: '',
                          public: true
                        };
      this.newWord = '';
      this.allWords = [];
      alert('List posted successfully!');
      this.router.navigate(['/home']);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

}
