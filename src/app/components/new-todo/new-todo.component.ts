import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo';
import { Bee } from '../../models/bee';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {

  @Input() bee;

  @Output() sendTodo = new EventEmitter();
  id = 0;
  userID = 0;
  title = 'title';
  completed = false;

  constructor() { }

  ngOnInit() {
  }

  onAddTodo() {
    let todos = this.bee.getTodos().length;
    this.id = todos + 1;

    this.userID = this.bee.getId();

    let todo = new Todo(this.id, this.userID, this.title, this.completed);
    this.bee.getTodos().push(todo);
    console.log(todo);
    console.log(this.bee.getTodos());

    this.id = 0;
    this.userID = 11;
    this.title = 'title';
    this.completed = false;
  }

  onTodoTitleChange(event) {
    this.title = event.target.value;
  }


}
