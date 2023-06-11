import React from "react";

const TourItem = ({
  id,
  image,
  date,
  title,
  desc,
  Icon,
  location,
  duration,
  cost,
}) => {
  return (
    <article className="tour-card" key={id}>
      <div className="tour-img-container">
        <img src={image} className="tour-img" alt="" />
        <p className="tour-date">{date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{title}</h4>
        </div>
        <p>{desc}</p>
        <div className="tour-footer">
          <p>
            <span>
              <Icon />
            </span>{" "}
            {location}
          </p>
          <p>
            {duration} {duration > 1 ? "days" : "day"}
          </p>
          <p>from ${cost}</p>
        </div>
      </div>
    </article>
  );
};

export default TourItem;
