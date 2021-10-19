import {SIZES} from './consts';
import {Link} from 'react-router-dom';
import React, {useState} from 'react';
import {FilmProps} from '../../../types/movie';
import VideoPlayer from '../video-player/video-player';

type CardFilmProps = {
  film: FilmProps;
  updateCardFilm: (movie: number) => void;
}

function CardFilm(props: CardFilmProps): JSX.Element {
  const {previewImage, name, id} = props.film;
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  function handleHoverCardFilm():void {
    props.updateCardFilm(id);
    setIsPlaying(true);
  }

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={handleHoverCardFilm} onMouseLeave={()=>setIsPlaying(false)}>
      {
        isPlaying
          ? <VideoPlayer film={props.film} isPlay={isPlaying}/>
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
