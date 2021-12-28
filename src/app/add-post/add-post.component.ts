import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { appInterface } from '../appstate/app.state';
import { post } from '../models/post.model';
import { addPost } from '../poststate/post.action';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  constructor(private store:Store<appInterface>) { }

  postForm!: FormGroup;

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
      ]),
      description: new FormControl(null, [
        Validators.required,
      ])
    })
  }

  addPost(){
    if(!this.postForm.valid){
      return;
    }
    const post: post={
      title: this.postForm.value.title,
      description: this.postForm.value.description,
    }
    this.store.dispatch(addPost({post}));


  }
  
  showDescriptionErrors():any{
    const descForm = this.postForm.get('description');
    if(descForm?.touched && !descForm.valid){
      if(descForm.errors?.['required']){
        return 'Description is Required'

      }
    }
  }

  showTitleErrors():any{
    const titleForm = this.postForm.get('title');
    if(titleForm?.touched && !titleForm.valid){
      if(titleForm.errors?.['required']){
        return 'Title is Required'
      }
    }
  }
}
