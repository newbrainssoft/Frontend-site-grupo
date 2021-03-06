import React from "react";

function NavButton(props) {
  // props: name, href, icon, active
  return (
    <li className={props.active ? "nav-item active" : "nav-item"}>
      <a className="nav-link navbutton px-0 pl-2" href={props.href}>
        {props.icon && <i className={props.icon}></i>}
        <small className="ml-1">{props.name}</small>
        {props.active && <span className="sr-only">(current)</span>}
      </a>
    </li>
  );
}

export default function NavbarAlt() {
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-dark fixed-top">
        <div className="container">
          {/* botão de menu  */}
          <button
            className="btn mr-auto text-white d-sm-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
						<i class="fal fa-bars"></i>
          </button>

					{/* icone do site  */}
          <a className="navbar-brand" href="/">
            <i class="fab fa-python mr-1"></i>
            <span className="d-sm-none d-md-inline">
              <strong className="font-weight-bold">coding</strong>.py
            </span>
          </a>

          {/* menu principal */}
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mx-auto">
              <NavButton name="Home" icon="fal fa-home" href="/" active />
              <NavButton name="Blog" icon="fal fa-comments" href="/" />
              <NavButton name="User" icon="fal fa-user" href="/"/>
            </ul>
          </div>

          <button className="btn ml-auto text-white" type="button">
            <i class="fal fa-search"></i>
          </button>
        </div>
      </nav>
    </header>
  );
}
