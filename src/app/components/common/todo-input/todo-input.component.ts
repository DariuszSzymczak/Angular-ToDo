import { Component, OnInit } from '@angular/core';
import {StoreServiceService} from '../../../store-service.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit {

  inputText: string;
  constructor(private store: StoreServiceService) { }

  ngOnInit() {
  }

  add() {
    if (this.inputText != null) {
      this.store.add(this.inputText);
      this.store.showList();
    }
  }

}
