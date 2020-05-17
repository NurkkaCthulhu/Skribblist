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
  userList: SkribblList = {words: 'sana,toinen,kolmas,terve,heihei',
                          code: 'thisMineCode',
                          info: 'This is a list. Enjoy!',
                          list_name: 'This is the posted list.',
                          public: true
                        };

  constructor() { }

  ngOnInit(): void {
  }

  createList() {
    fetch(this.baseUrl + 'lists', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.userList),
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log('Success; posted a list called:', data.name);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  deleteList() {
    fetch(this.baseUrl + 'lists/2', {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(res => console.log(res));
  }

}
