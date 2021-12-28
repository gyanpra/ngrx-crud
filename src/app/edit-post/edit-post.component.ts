import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { appInterface } from '../appstate/app.state';
import { post } from '../models/post.model';
import { updatePost } from '../poststate/post.action';
import { getPostById } from '../poststate/post.selector';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  post!:post;
  updateForm!: FormGroup;

  constructor(private store:Store<appInterface>, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params);
      this.store.select(getPostById(params['id'])).subscribe(post => {
        console.log(post);
        this.post = post;
        this.updateForm = new FormGroup({
          title: new FormControl(this.post.title, Validators.required),
          description: new FormControl(this.post.description, Validators.required)
        });
      });
    });
  }




  updatePost(){
    const title = this.updateForm.value.title;
    const description = this.updateForm.value.description;

    const post:post = {
      id: this.post.id,
      title,
      description
    };
    this.store.dispatch(updatePost({post}));
    this.router.navigate(['post']);
  }

}

