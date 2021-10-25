import React, {useEffect, useRef} from 'react';
import {MovieProps} from '../../../types/movie';
import {SIZES} from '../card-film/constants';

type VideoPlayerProps = {
  film: MovieProps;
  isPlay: boolean;
}

function VideoPlayer(props:VideoPlayerProps): JSX.Element {
  const {previewImage, previewVideoLink} = props.film;
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }

    if (props.isPlay) {
      const timeout = setTimeout(() => {
        if (videoRef.current !== null) {
          videoRef.current.play();
        }
      }, 1000);

      return () => {
        clearTimeout(timeout);
      };
    }

    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    videoRef.current.load();
  }, [props.isPlay]);

  return (
    <video className="small-film-card__video" src={previewVideoLink} width={SIZES.width} height={SIZES.height} poster={previewImage} ref={videoRef} preload="metadata" muted loop/>
  );
}


export default VideoPlayer;
