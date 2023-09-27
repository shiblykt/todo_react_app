import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLink.css';

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" end>
          ALL USERS
        </NavLink>
      </li>
      <li>
        <NavLink to="/u1/places">
          MY PLACES
        </NavLink>
      </li>
      <li>
        <NavLink to="/locations">
          ADD PLACE
        </NavLink>
      </li>
      <li>
        <NavLink to="/auth">
          AUTHENTICATE
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
