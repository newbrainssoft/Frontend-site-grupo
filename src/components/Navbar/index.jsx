import React from "react";

import "./Navbar.css";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-dark shadow fixed-top ">
        <div className="container">
          <button className="btn text-info-light">
            <i className="far fa-lg fa-bars" aria-hidden="true"></i>
          </button>

					<a 
						className="navbar-brand font-weight-bold d-none d-sm-inline" 
						title="home page"
						href="/">
						<i class="fal fa-exclamation-circle mr-2" aria-hidden="true"></i>
            New Brain Soft
          </a>

          <button className="btn text-info-light">
            <i className="far fa-lg fa-search"></i>
          </button>

        </div>
      </nav>


    </header>
  );
}
