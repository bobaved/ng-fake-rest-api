import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PostService } from '../api/post.service';
import { Post } from '../shared/model/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.sass'],
  providers: [PostService]
})
export class PostListComponent implements OnInit {

  posts: Post[];

  postBody = new FormControl('');
  postTitle = new FormControl('');

  constructor(private postService: PostService) { 
    this.posts = []
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts
    })

  }

  createPost(): void {
    this.postService.createPost(1, this.postTitle.value, this.postBody.value).subscribe((post: Post) => {
      console.log(post)
      this.posts.push(post)
    })
  }

}
