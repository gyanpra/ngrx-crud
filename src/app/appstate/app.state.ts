import { counterReducer } from '../counterstate/counter.reducer';
import { counterInterface } from '../counterstate/counter.state';
import { postReducer } from '../poststate/post.reducer';
import { postInterface } from '../poststate/post.state';



export interface appInterface{
    counter: counterInterface,
    posts: postInterface
}

export const appReducer={
    counter: counterReducer,
    post: postReducer

    

}