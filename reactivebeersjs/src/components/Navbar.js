import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => (
  <nav className="uk-navbar-container uk-margin" uk-navbar="true">
    <div className="uk-navbar-center">
      <ul className="uk-navbar-nav">
        <li>
          <Link to="/">
            <span
              className="uk-icon uk-margin-small-right"
              uk-icon="icon: home"
            />
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
