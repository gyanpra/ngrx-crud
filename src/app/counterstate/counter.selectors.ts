import { createFeatureSelector, createSelector } from "@ngrx/store";
import { counterInterface } from "./counter.state";

const getCount = createFeatureSelector<counterInterface>('counter');

export const getCounter = createSelector(getCount, (state)=>{
    return state.counter;
})

export const getName = createSelector(getCount, (state)=>{
    return state.names;
})