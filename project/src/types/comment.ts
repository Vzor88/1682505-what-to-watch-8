export type CommentProps = {
  user: User
  rating: number;
  comment: string;
  date: Date;
}

type User = {
  id: number;
  name: string;
}

