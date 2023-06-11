import React from "react";
import { serviceItems } from "../../data.js";
import Title from "../title/Title";
import ServiceItem from "./ServiceItem.jsx";
import "./service.css";
const Service = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />
      <div className="section-center services-center">
        {serviceItems.map((item) => {
          return <ServiceItem key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Service;
