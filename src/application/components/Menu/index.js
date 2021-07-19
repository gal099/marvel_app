import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <Link className="nav-link" to="/">
          Inicio
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/HeroList">
          Hero List
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/HeroDetails/">
          Hero Details
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/asd">
          Error en la url
        </Link>
      </li>
    </ul>
  );
}
