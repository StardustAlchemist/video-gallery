import React from 'react';

const Movie = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10%',
      }}
    >
      <video
        src={props.location.movieprops.url}
        type="video/mp4"
        width="50%"
        height="50%"
        controls
      ></video>
    </div>
  );
};

export default Movie;
