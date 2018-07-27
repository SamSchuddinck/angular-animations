import { Component } from '@angular/core';
import { cardFocusAnimation, flyInOutAnimation, noteFocusAnimation, pageAnimation } from './shared/animations';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    flyInOutAnimation,
    cardFocusAnimation,
    noteFocusAnimation,
    pageAnimation
  ]
})
export class AppComponent {
  state = 'unfocussed';

  todos: Todo[] = [
    {id: 1, text: 'Todo 1'},
    {id: 2, text: 'Todo 2'},
    {id: 3, text: 'Todo 3'},
    {id: 4, text: 'Todo 4'},
  ];

  toggleFocus() {
    this.state = (this.state === 'focussed') ? 'unfocussed' : 'focussed';
  }

  addTodo(event) {
    const latestTodo = this.todos[this.todos.length - 1];
    const latestId = latestTodo ? latestTodo.id : 0;
    this.todos.push({id: latestId + 1, text: event.target.value});
    event.target.value = '';
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
