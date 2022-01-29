import { Component, OnInit } from '@angular/core';
import { PostService } from '../api/post.service';
import { Post } from '../shared/model/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.sass']
})
export class PostListComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostService) { 
    this.posts = []
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts
    })
  }

}
