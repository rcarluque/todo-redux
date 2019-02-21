import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get('https://todo-api-rest-rafa.herokuapp.com/api/todos');
  }

  addTodo(texto: String) {
    return this.http.post('https://todo-api-rest-rafa.herokuapp.com/api/add', texto);
  }

  editarToggleTodo(id: String, toggle: boolean) {
    this.http.put(`https://todo-api-rest-rafa.herokuapp.com/api/todo/${id}?toggle=${toggle}`, {}).subscribe( log => console.error(log) );
  }

  editarTextoTodo(id: String, texto: String) {
    this.http.put(`https://todo-api-rest-rafa.herokuapp.com/api/todo/${id}?texto=${texto}`, {}).subscribe( log => console.error(log) );
  }

  deleteTodo(id: String) {
    this.http.delete(`https://todo-api-rest-rafa.herokuapp.com/api/delete/${id}`).subscribe( log => console.error(log) );
  }

}
