import React from 'react';
import { Link } from 'react-router-dom';
import SaintSeiya from '../resources/images/SaintSeiyaOverture.jpg';
import Evangelion from '../resources/images/Evangelion3.jpg';
import GhostInTheShell from '../resources/images/GhostInTheShell.jpg';

const Grid = () => {
  return (
    <div>
      <div className="container" style={{ marginTop: '20px' }}>
        <div className="row">
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
        </div>
      </div>
    </div>
  );
};

export default Grid;
