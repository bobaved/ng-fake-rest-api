import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../api/post.service';
import { Comment } from '../shared/model/comment.model';
import { Post } from '../shared/model/post.model';

@Component({
  selector: 'app-post-teaser',
  templateUrl: './post-teaser.component.html',
  styleUrls: ['./post-teaser.component.sass'],
  providers: [PostService]
})
export class PostTeaserComponent implements OnInit {
  @Input() post!: Post

  comments: Comment[];

  constructor(private postService: PostService) {
    this.comments = [];
  }

  ngOnInit(): void {
    this.postService.getCommentsByPostId(this.post.id).subscribe((comments: Comment[]) => {
      this.comments = comments
    })
  }

}
