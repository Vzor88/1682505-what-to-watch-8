export type CommentProps = {
  user: User
  rating: number;
  comment: string;
  date: string;
}

type User = {
  id: number;
  name: string;
}

