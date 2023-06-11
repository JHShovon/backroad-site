import React from "react";
import { tourItems } from "../../data";
import Title from "../title/Title";
import TourItem from "./TourItem";
import "./tour.css";
const Tour = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />
      <div className="section-center featured-center">
        {tourItems.map((item) => {
          return <TourItem key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Tour;
