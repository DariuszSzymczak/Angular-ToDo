import { Injectable } from '@angular/core';
import { Todo } from '../../interfaces/Todo';

@Injectable({
  providedIn: 'root'
})


export class TodoService {
  todoList: Todo[] = [];

  mockData: Todo[] = [
    {id: 1, text: 'Go to work', check: true},
    {id: 2, text: 'Do some exercises', check: true},
    {id: 3, text: 'GO to GYM', check: false},
    {id: 4, text: 'Make homework', check: true},
    {id: 5, text: 'Drink some herbs', check: false}
  ];

  constructor() {
    this.todoList = this.mockData;
  }

  add(text: string) {
    const id = this.todoList[this.todoList.length - 1].id + 1;
    const todoItem: Todo = {
      id,
      text,
      check : false
    };
    this.todoList.push(todoItem);
  }

  remove(id: number) {
    const newTodoList =  [...this.todoList];
    newTodoList.splice(id, 1);
    this.todoList = newTodoList;
  }

  showList() {
    return this.todoList;
  }
}
