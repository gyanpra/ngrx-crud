import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { appInterface } from '../appstate/app.state';
import { post } from '../models/post.model';
import { deletePost } from '../poststate/post.action';
import { getpost } from '../poststate/post.selector';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts!: Observable<post[]>

  constructor(private store:Store<appInterface>) { }

  ngOnInit(): void {
    this.posts = this.store.select(getpost);
  }

  onDeletePost(id:any){
    if(confirm("Do you want to Delete ?")){
      this.store.dispatch(deletePost({id}));
    }
    
  }

}
