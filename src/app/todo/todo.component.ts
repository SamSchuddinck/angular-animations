import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { flyInOutAnimation } from '../shared/animations';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  animations: [
    flyInOutAnimation
  ],
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo;
  @Output() delete = new EventEmitter<number>();
  @HostBinding('@flyInOut') 'in';

  constructor() { }

  ngOnInit() {
  }

  deleteTodo(id: number) {
    this.delete.emit(id);
  }

}
