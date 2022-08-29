import React from "react";
import { useState } from "react";
import "../components/Navigation.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {faBell} from '@fortawesome/free-solid-svg-icons';
import {faCircleInfo} from '@fortawesome/free-solid-svg-icons';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';

export default function Navigation() {

const [navigationBlack, setNavigationBlack] = useState(false);
const [toggleMenu, setToggleMenu] = useState(false);

const transitionNav = () => {
  window.scrollY > 100 ? setNavigationBlack(true) : setNavigationBlack(false);
};

useState(() => {
  document.addEventListener("scroll", transitionNav);
});

console.log(navigationBlack);

const handleClick = () => {
  console.log(toggleMenu);
  toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
};


  return (
    <div className={`nav ${navigationBlack || toggleMenu ? "nav-black" :"nav-transparent"} ${toggleMenu && "show"}`}>
      <button className="nav_burger" onClick={handleClick}>
      <FontAwesomeIcon icon={faBars}></FontAwesomeIcon></button>
      <img src="../images/netflix_logo.png" className="nav_logo"alt="netflixx"/>
      <nav className="nav_links">
        <a href="/" className ="nav_link">
        Homepage
        </a>
        <a href="/" className ="nav_link">
        Series
        </a>
        <a href="/" className ="nav_link">
        Movies
        </a>
        <a href="/" className ="nav_link">
        New and Popular
        </a>
        <a href="/myList" className ="nav_link">
        My list
        </a>
        </nav>
        <div className="nav_rights">
            <a href="/" className="nav_right">
            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
            </a>
            <a href="/" className="nav_right">
            KID
            </a>
            <a href="/" className="nav_right">
            <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
            </a>
            <a href="/" className="nav_right">
            <img src="../images/avatar1.png" className="avatar" alt="avatar"/>
            </a>
            <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
            <a href="/" className="nav_right">
            <FontAwesomeIcon icon={faCircleInfo}></FontAwesomeIcon>
            </a>
        </div>
    </div>
  )
}
