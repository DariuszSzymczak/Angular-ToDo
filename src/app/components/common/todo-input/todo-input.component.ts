import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../../services/todo.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit {

  inputText: string;
  constructor(private service: TodoService) { }

  ngOnInit() {
  }

  add() {
    if (this.inputText != null) {
      this.service.add(this.inputText);
    }
  }

}
