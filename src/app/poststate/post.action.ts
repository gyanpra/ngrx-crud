import { createAction, props } from "@ngrx/store";
import { post } from "../models/post.model";


export const AddPostAction = '[Add post to posts] add post';
export const UpdatePostAction = '[Update post] update post';
export const DeletePostAction = '[Delete post] Delete post';

export const addPost = createAction(AddPostAction,props<{post:post}>())
export const updatePost = createAction(UpdatePostAction,props<{post:post}>())
export const deletePost = createAction(DeletePostAction,props<{id:number}>())


