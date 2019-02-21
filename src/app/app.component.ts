import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MainState } from './models/mainState.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  mensaje: String;
  codigo: String;

  constructor(private store: Store<MainState>) {}

  ngOnInit() {
    this.store.select('todos').subscribe( error => {
      console.log(error.error);
    });
  }

}
