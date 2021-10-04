import {CommentProps} from '../../types/comment';
import dayjs from 'dayjs';

function Comment({comment, user, rating, date}: CommentProps): JSX.Element {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime="2016-12-24">{dayjs(date).format('MMMM DD YYYY').toString()}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating.toFixed(1)}</div>
    </div>
  );
}

export default Comment;
