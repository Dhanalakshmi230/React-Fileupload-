// Sidebar.js
import React, { useState } from 'react';
import './nav.css'; // Make sure to import your CSS file

const Sidebar = () => {
  const [isMenuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!isMenuActive);
  };

  return (
    <div className={`navigation ${isMenuActive ? 'active' : ''}`}>
      <ul>
        <li>
          <a href="#">
            <span className="icon"><i className="fa-solid fa-house"></i></span>
            <span className="title">Home</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon"><i className="fa-solid fa-user"></i></span>
            <span className="title">Profile</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon"><i className="fa-solid fa-message"></i></span>
            <span className="title">Messages</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon"><i className="fa-solid fa-circle-info"></i></span>
            <span className="title">Help</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon"><i className="fa-solid fa-gear"></i></span>
            <span className="title">Settings</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon"><i className="fa-solid fa-lock"></i></span>
            <span className="title">Password</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon"><i className="fa-solid fa-right-from-bracket"></i></span>
            <span className="title">SignOut</span>
          </a>
        </li>
      </ul>
      <div className={`toggle ${isMenuActive ? 'active' : ''}`} onClick={toggleMenu}></div>
    </div>
  );
};

export default Sidebar;
