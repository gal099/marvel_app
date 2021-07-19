import React from 'react';
import { Link } from 'react-router-dom';

export default () => <>
<h1>Bienvenidos a mi App de MARVEL</h1>
<ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/HeroList">Hero List</Link></li>
        <li><Link to="/HeroDetails/">Hero Details</Link></li>
        <li><Link to="/asd">Error en la url</Link></li>
    </ul>
</>;