import React from "react";
import Logo from "../../assets/images/logo.svg";
import { navLinks, socialLinks } from "../../data";
import PageLink from "../pagelink/PageLink";
import SocialLink from "../social/SocialLink";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={Logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <ul className="nav-links" id="nav-links">
          {navLinks.map((navLink) => {
            const { id, href, text } = navLink;
            return (
              <PageLink key={navLink.id} {...navLink} className="nav-link" />
            );
          })}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((links) => {
            return (
              <SocialLink key={links.id} {...links} className="nav-icon" />
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
