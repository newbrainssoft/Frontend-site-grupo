import React from "react";

import "./Navbar.css";

function NavButton(props) {
  // props: name, href, icon, active
  return (
    <li className={props.active ? "nav-item active" : "nav-item"}>
      <a className="nav-link navbutton px-0 pl-2" href={props.href}>
        {props.icon && <i className={props.icon}></i>}
        <small className="ml-1 d-md-inline d-sm-none">{props.name}</small>
        {props.active && <span className="sr-only">(current)</span>}
      </a>
    </li>
  );
}

export default function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-dark bg-black fixed-top">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <em>
              coding<span className="text-info-light">.py</span>
            </em>
          </a>

          <button
            className="navbar-toggler d-lg-none border-0 ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ml-auto">
              <NavButton name="Home" href="/" icon="fal fa-home" active />
              <NavButton name="User" icon="fal fa-user" /> 
              <NavButton name="Search" icon="fal fa-search" />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
