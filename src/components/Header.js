import React, { useRef } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./header.css";

export default function Header() {
  const mainNav = useRef(null);
  const navBtn = useRef(null);

  function openCloseMainNav() {
    mainNav.current.classList.toggle("open");
    navBtn.current.classList.toggle("open");
  }

  function closeMainNav() {
    if (mainNav.current.classList.contains("open")) {
      mainNav.current.classList.remove("open");
      navBtn.current.classList.remove("open");
    } else {
      return;
    }
  }

  return (
    <header className="header">
      <div className="top-header">
        <div className="site-logo"></div>
        <Link to={"/"}>
          <h1 className="site-title">Virtual Epoch</h1>
        </Link>
        <div className="right-side-header">
          <div className="nav-btn" ref={navBtn} onClick={openCloseMainNav}>
            <div className="nav-btn-bars close-anim"></div>
          </div>
        </div>
      </div>
      <nav className="main-nav" ref={mainNav}>
        <ul>
          <CustomLink className="link1" onClick={closeMainNav} to={"/"}>
            HOME
          </CustomLink>
          <CustomLink className="link2" onClick={closeMainNav} to={"/about"}>
            ABOUT
          </CustomLink>
          <CustomLink className="link3" onClick={closeMainNav} to={"/projects"}>
            PROJECTS
          </CustomLink>
          <CustomLink className="link4" onClick={closeMainNav} to={"/contact"}>
            CONTACT
          </CustomLink>
        </ul>
      </nav>
    </header>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props} className="link">
        {children}
      </Link>
    </li>
  );
}
