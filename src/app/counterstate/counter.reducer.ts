import { initialCounter } from "./counter.state";

import { createReducer, on } from "@ngrx/store";
import { increment, decrement, reset, customIncrement, nameChange } from "./counter.action";


const _counterReducer = createReducer(initialCounter,
    on(increment, (state) => {
    return {
        ...state,
        counter: state.counter + 1
    }
    }),
    on(decrement, (state) => {
        return {
            ...state,
            counter: state.counter - 1
        }
    }),
    on(reset, (state) => {
        return {
            ...state,
            counter: 0
        }
    }),
    on(customIncrement, (state,action) => {
        return {
            ...state,
            counter: state.counter+ action.count
        }
    }),
    on(nameChange, (state) => {
        return {
            ...state,
            names: 'Dhanashri'
            
        }
    }),

)



export function counterReducer(state: any, action: any) {
    return _counterReducer(state, action);
}