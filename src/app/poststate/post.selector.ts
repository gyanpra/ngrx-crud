import { createFeatureSelector, createSelector, props } from "@ngrx/store";
import { postInterface } from "./post.state";


const getPosts = createFeatureSelector<postInterface>('post');

export const getpost = createSelector(getPosts, (state)=>{
    return state.posts
})


export const getPostById = (id:number)=>createSelector(getPosts, (state:any)=>{
    console.log(state.posts);
    return state.posts.find((post: { id: number; })=>post.id ==id);

}
)



