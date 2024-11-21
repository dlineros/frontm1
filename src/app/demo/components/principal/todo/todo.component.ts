import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/store/model/todo.model';
import { addTodo, toggleTodo, loadTodos } from 'src/app/store/actions/todo.actions';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
    todos$: Observable<Todo[]>;

    constructor(private store: Store<{ todos: Todo[] }>) {
      this.todos$ = this.store.select('todos');
    }

    onAddTodo() {
      const newTodo: Todo = { id: Date.now(), title: 'New Task', completed: false };
      this.store.dispatch(addTodo({ todo: newTodo }));
    }

    onToggle(id: number) {
      this.store.dispatch(toggleTodo({ id }));
    }

    ngOnInit() {
      this.store.dispatch(loadTodos());
    }
  }
