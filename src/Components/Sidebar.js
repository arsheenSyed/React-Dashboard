import React, { useState } from "react";
import "./Sidebar.css";

function Sidebar() {
  const [style, setStyle] = useState("sidebarInfo");
  const [slider, setSlider] = useState("close");
  const changeStyle = () => {
    console.log("You just CLicked");
    setStyle("sidebarInfoOpen");
  };

  return (
    <div className="sidebar">
      <div className="container">
        <div className="row">
          <div className="sidebar-icons">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link sidebar-link" href="#">
                  <span className="material-symbols-outlined">dashboard</span>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link sidebar-link" href="#">
                  <span className="material-symbols-outlined">
                    construction
                  </span>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link sidebar-link" href="#">
                  <span className="material-symbols-outlined">group</span>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link sidebar-link" href="#">
                  <span className="material-symbols-outlined">school</span>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link sidebar-link" href="#">
                  <span className="material-symbols-outlined">
                    admin_panel_settings
                  </span>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link sidebar-link" href="#">
                  <span className="material-symbols-outlined">summarize</span>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link sidebar-link" href="#">
                  <span className="material-symbols-outlined">mail</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link sidebar-link" href="#">
                  <span className="material-symbols-outlined">settings</span>
                </a>
              </li>

              {/* <li className="nav-item">
                <a className="nav-link sidebar-link" href="#">

                </a>
               </li> */}
            </ul>
          </div>

          <div className={style}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link sidebar-link" href="#">
                  dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link sidebar-link" href="#">
                  setup
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link sidebar-link" href="#">
                  Manage Users
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link sidebar-link" href="#">
                  Manage Students
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link sidebar-link" href="#">
                  Manage Compoetitions
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link sidebar-link" href="#">
                  reports
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link sidebar-link" href="#">
                  Mail Templates
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link sidebar-link" href="#">
                  Settings
                </a>
              </li>
            </ul>
          </div>

          <h1 className="slider" onClick={changeStyle}>
            <span className="material-symbols-outlined">chevron_right</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
