import React from "react";

const SocialLink = ({ href, Icon, className }) => {
  return (
    <li>
      <a href={href} target="_blank" className={className}>
        <Icon />
      </a>
    </li>
  );
};

export default SocialLink;
