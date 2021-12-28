import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { appInterface } from '../appstate/app.state';
import { decrement, increment, reset } from '../counterstate/counter.action';
import { counterInterface } from '../counterstate/counter.state';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html'
})
export class CounterButtonComponent implements OnInit {

  constructor(private store:Store<appInterface>) { }

  ngOnInit(): void {
  }

  onIncrement(){
    this.store.dispatch(increment());
  }

  onDecrement(){
    this.store.dispatch(decrement());
  }

  onReset(){
    this.store.dispatch(reset());
  }
}
