import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() id: number;
  @Input() check: boolean;
  constructor() {
  }

  ngOnInit() {
  }

  onCheck() {
    this.check = !this.check;
  }

}
