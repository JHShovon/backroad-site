import React from "react";

const ServiceItem = ({ id, Icon, title, desc }) => {
  return (
    <article className="service" key={id}>
      <span className="service-icon">
        <Icon />
      </span>
      <div className="service-info">
        <h4 className="service-title">{title}</h4>
        <p className="service-text">{desc}</p>
      </div>
    </article>
  );
};

export default ServiceItem;
