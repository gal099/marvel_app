import React from 'react';
import Data from '../../data/marvel/characters.json';

export default function HeroList() {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {Data.data.results.map((elem) => (
        <div className="col">
          <div className="card" style={{ width: '18rem' }}>
            <img
              src={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text, text-center">{elem.name}</p>
            </div>
          </div>
          <div>{console.log(elem)}</div>
        </div>
      ))}
    </div>
  );
}
