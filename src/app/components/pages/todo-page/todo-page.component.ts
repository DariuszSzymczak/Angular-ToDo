import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../../services/todo.service';
import {Todo} from '../interfaces/Todo'
@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {

  todoList: Todo[] = [];

  constructor(private service: TodoService) { }

  ngOnInit() {
    this.todoList = this.service.showList();
  }

}
