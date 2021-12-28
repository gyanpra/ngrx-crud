import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { appInterface } from '../appstate/app.state';
import { customIncrement, nameChange } from '../counterstate/counter.action';
import { getName } from '../counterstate/counter.selectors';
import { counterInterface } from '../counterstate/counter.state';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html'
})
export class CustomInputComponent implements OnInit {

  value: number = 0;
  name$!: Observable<{}>;


  constructor(private store:Store<appInterface>) { }

  ngOnInit(): void {
    this.name$ = this.store.select(getName);
  }

  onClick(){
    this.store.dispatch(customIncrement({count: +this.value}))
  }

  onClickForNameChange(){
    this.store.dispatch(nameChange());
  }

}
