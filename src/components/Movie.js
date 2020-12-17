import React from 'react';

const Movie = ({ match }) => {
  return (
    <div>
      {((name) => {
        switch (name) {
          case 'SaintSeiya':
            return <h1>{match.params.name}</h1>;
          default:
            return <h1>No Movie</h1>;
        }
      })(match.params.name)}
    </div>
  );
};

export default Movie;
