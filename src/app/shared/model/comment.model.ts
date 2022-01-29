export class Comment {
  constructor(
    public postId: Number,
    public id: Number,
    public name: String,
    public email: String,
    public body: String,
  ) {}
}