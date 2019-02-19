import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get('https://todo-api-rest-rafa.herokuapp.com/api/todos');
  }

  addTodo(todo: Todo) {
    return this.http.post('https://todo-api-rest-rafa.herokuapp.com/api/add', todo);
  }

  editarTodo(id: String, changeValue: any) {
    let body = {};
    if (typeof(changeValue) === 'string') {
      body = {
        texto: changeValue
      }
    } else {
      body = {
        completado: changeValue
      }
    }

    this.http.put(`https://todo-api-rest-rafa.herokuapp.com/api/todo/${id}`, body).subscribe();
  }

  deleteTodo(id: String) {
    this.http.delete(`https://todo-api-rest-rafa.herokuapp.com/api/delete/${id}`).subscribe( log => console.error(log) );
  }

}
