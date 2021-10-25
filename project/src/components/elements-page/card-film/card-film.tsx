import {SIZES} from './constants';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import {MovieProps} from '../../../types/movie';
import VideoPlayer from '../video-player/video-player';

type CardFilmProps = {
  movie: MovieProps;
  updateCardFilm: (movie: number) => void;
}

function CardFilm(props: CardFilmProps): JSX.Element {
  const {previewImage, name, id} = props.movie;
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  function handleHoverCardFilm():void {
    props.updateCardFilm(id);
    setIsPlaying(true);
  }

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={handleHoverCardFilm} onMouseLeave={()=>setIsPlaying(false)}>
      {
        isPlaying
          ? <VideoPlayer film={props.movie} isPlay={isPlaying}/>
          :
          <div className="small-film-card__image">
            <img src={previewImage} alt={name} width={SIZES.width} height={SIZES.height}/>
          </div>
      }
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}

export default CardFilm;
