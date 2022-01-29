import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Comment } from "../shared/model/comment.model";

import { Post } from "../shared/model/post.model";


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl= 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl)
  }

  getCommentsByPostId(postId: Number): Observable<Comment[]> {
    const url = `${this.apiUrl}/${postId}/comments`

    return this.http.get<Comment[]>(url);
  }

  createPost(userId: Number, title: String, body: String): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, {
      userId, 
      title, 
      body
    })
  }
}