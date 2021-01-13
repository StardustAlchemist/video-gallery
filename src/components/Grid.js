import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const convertString = (title) => {
  let str = title;
  let newStr = str.replaceAll(' ', '-');
  console.log(newStr);
  return newStr;
};

const Grid = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    (async () => {
      await axios.get(`http://localhost:4000`).then((res) => {
        const movies = res.data;
        setMovie(movies);

        let str = movies[0].name;
        let newStr = str.replaceAll(' ', '-');
        console.log(newStr);
      });
    })();
  }, []);

  return (
    <div>
      <div className="container" style={{ marginTop: '20px' }}>
        <div className="row">
          {movie.map((item) => {
            return (
              <div key={item._id} className="col-sm">
                <Link
                  to={{
                    pathname: `/movie/${convertString(item.name)}`,
                    movieprops: { url: item.url },
                  }}
                >
                  <img
                    src={item.picture}
                    width="250px"
                    height="200px"
                    alt="React"
                  />
                </Link>
                <p>{item.name}</p>
              </div>
            );
          })}
        </div>
        {/* <div className="row">
          <div className="col-sm">
            <Link to="/movie/Saint-Seiya">
              <img src={SaintSeiya} width="250px" height="200px" alt="React" />
            </Link>
          </div>
          <div className="col-sm">
            <Link to="/movie/Evangelion-3">
              <img src={Evangelion} width="250px" height="200px" alt="React" />
            </Link>
          </div>
          <div className="col-sm">
            <Link to="/movie/Ghost-In-The-Shell">
              <img
                src={GhostInTheShell}
                width="250px"
                height="200px"
                alt="React"
              />
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Grid;
