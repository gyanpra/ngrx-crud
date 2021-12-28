import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { appInterface } from '../appstate/app.state';
import { getCounter } from '../counterstate/counter.selectors';
import { counterInterface } from '../counterstate/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html'
})
export class CounterOutputComponent implements OnInit {

  counter$!: Observable<{}>

  constructor(private store:Store<appInterface>) { }

  ngOnInit(): void {
    this.counter$ = this.store.select(getCounter);
  }
}
