import React, { useRef, useEffect } from 'react';
import MovieData from '../resources/movies.json';

var movieList = MovieData.movies;

const Movie = ({ match }) => {
  const myvideo = useRef();

  // useEffect(() => {
  //   var video = document.getElementById('pelicula');
  //   document.addEventListener('keypress', (e) => {
  //     video.play();
  //   });
  // });

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10%',
      }}
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          console.log('enter press here! ');
        }
      }}
    >
      {movieList.map((s) => {
        if (s.name === match.params.name) {
          return (
            <video
              key={s.id}
              id="pelicula"
              src={s.url}
              type="video/mp4"
              width="50%"
              height="50%"
              ref={myvideo}
              controls
            ></video>
          );
        }
      })}
    </div>
  );
};

export default Movie;
