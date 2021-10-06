import dayjs from 'dayjs';
import {FLOATING_POINT} from './consts';

type CommentProps = {
  user: {
    id: number;
    name: string;
  }
  rating: number;
  comment: string;
  date: string;
}

function Comment(props: CommentProps): JSX.Element {
  const {comment, user, rating, date} = props;
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime={dayjs(date).format('YYYY-MM-DD').toString()}>{dayjs(date).format('MMMM DD YYYY').toString()}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating.toFixed(FLOATING_POINT)}</div>
    </div>
  );
}

export default Comment;
