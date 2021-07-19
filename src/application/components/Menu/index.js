import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <ul>
      <li>
        <Link to="/">Inicio</Link>
      </li>
      <li>
        <Link to="/HeroList">Hero List</Link>
      </li>
      <li>
        <Link to="/HeroDetails/">Hero Details</Link>
      </li>
      <li>
        <Link to="/asd">Error en la url</Link>
      </li>
    </ul>
  );
}
