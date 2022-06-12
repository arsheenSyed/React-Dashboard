import React from "react";
import "./Notification.css";

class TopNavbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-expand-lg navabar-expand-md navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Logo
        </a>
        {/* className="collapse navbar-collapse */}
        {/* <div id="navbarSupportedContent"> */}
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              <div className="icon-button">
                <span className="material-symbols-outlined">notifications</span>
                <span className="icon-button--badge">2</span>
              </div>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              <img
                src={"../accountImg.jpg"}
                styles={"width: 100px; height: 100px;"}
              />
            </a>
          </li>

          <li className="nav-item">
            <div className="dropdown show">
              <a
                className="btn btn-dropdown--color dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              ></a>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </div>
          </li>
        </ul>
        {/* </div> */}
      </nav>
    );
  }
}

export default TopNavbar;
