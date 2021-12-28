import { post } from "../models/post.model";

export interface postInterface{
    posts: post[]



}


export const initialPost : postInterface={
    posts: [
        {
            id: 1,
            title: 'Random title 1',
            description: 'Random Description 1'
        },
        {
            id: 2,
            title: 'Random title 2',
            description: 'Random Description 2'
        }
    ]
}