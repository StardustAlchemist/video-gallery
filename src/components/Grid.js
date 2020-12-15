import React from 'react';

const Grid = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <img src={process.env.PUBLIC_URL + '/logo192.png'} alt="React" />
          </div>
          <div className="col-sm">
            <img src={process.env.PUBLIC_URL + '/logo192.png'} alt="React" />
          </div>
          <div className="col-sm">
            <img src={process.env.PUBLIC_URL + '/logo192.png'} alt="React" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <img src={process.env.PUBLIC_URL + '/logo192.png'} alt="React" />
          </div>
          <div className="col-sm">
            <img src={process.env.PUBLIC_URL + '/logo192.png'} alt="React" />
          </div>
          <div className="col-sm">
            <img src={process.env.PUBLIC_URL + '/logo192.png'} alt="React" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
