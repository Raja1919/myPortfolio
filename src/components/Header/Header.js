
import React, { useState } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const closeMenu = () => setOpen(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/skill", label: "Skills" },
    { path: "/project", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand__dot" />
          Raja<span className="brand__accent">Dev</span>
        </Link>

        <button
          className={`nav-toggle ${open ? "is-open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={pathname === link.path ? "active" : ""}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          <a
            className="pill-button"
            href="https://drive.google.com/file/d/1PpiZaHWWVjC0_nsqPvuMfI44PsIETO5b/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
