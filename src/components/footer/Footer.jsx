import React from "react";
import { navLinks, socialLinks } from "../../data";
import PageLink from "../pagelink/PageLink";
import SocialLink from "../social/SocialLink";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {navLinks.map((link) => {
          const { id, href, text } = link;
          return <PageLink key={link.id} {...link} className="footer-link" />;
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((links) => {
          const { id, href, Icon } = links;
          return (
            <SocialLink key={links.id} {...links} className="footer-icon" />
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
