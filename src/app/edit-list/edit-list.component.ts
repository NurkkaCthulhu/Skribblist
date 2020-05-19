import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

interface FoundList {
  id: number;
  words: string;
  code: string;
  info: string;
  list_name: string;
  public: boolean;
  likes: number;
}

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit {

  baseUrl = environment.baseUrl;
  userId: number;
  userPass: string;
  showDelete: boolean = false;
  showError: boolean = false;
  foundList: FoundList;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getList() {
    fetch(this.baseUrl + 'lists/' + this.userId + '&' + this.userPass)
    .then(res => res.json())
    .then(res => {
      if (res.error) {
        this.showError = true;
        this.showDelete = false;
      } else {
        this.showError = false;
        this.showDelete = true;
        this.foundList = res;
      }
    });
  }

  deleteList() {
    fetch(this.baseUrl + 'lists/' + this.userId, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(res => {
      this.userId = 0;
      this.userPass = '';
      this.showError = true;
      this.showDelete = false;
      this.foundList = {  id: 0, words: '', code: '', info: '', list_name: '', public: false, likes: 0};
      alert("List deleted!");
      this.router.navigate(['/home']);
    });
  }

}
