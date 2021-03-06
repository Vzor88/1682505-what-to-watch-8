export type CommentProps = {
  id: number,
  user: {
    id: number,
    name: string,
  },
  rating: number,
  comment: string,
  date: string,
}

