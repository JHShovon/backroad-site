import tour1 from "./assets/images/tour-1.jpeg";
import tour2 from "./assets/images/tour-2.jpeg";
import tour3 from "./assets/images/tour-3.jpeg";
import tour4 from "./assets/images/tour-4.jpeg";

import {
  FaFacebook,
  FaMap,
  FaSocks,
  FaSquarespace,
  FaTree,
  FaTwitter,
  FaWallet,
} from "react-icons/fa";

export const navLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#service", text: "service" },
  { id: 4, href: "#tour", text: "tour" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", Icon: FaFacebook },
  { id: 2, href: "https://www.twitter.com", Icon: FaTwitter },
  { id: 3, href: "https://www.squarespace.com", Icon: FaSquarespace },
];

export const serviceItems = [
  {
    id: 1,
    Icon: FaWallet,
    title: "saving money",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam minus omnis esse totam quidem accusantium",
  },
  {
    id: 2,
    Icon: FaTree,
    title: "endless hiking",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam minus omnis esse totam quidem accusantium",
  },
  {
    id: 3,
    Icon: FaSocks,
    title: "amazing comfort",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam minus omnis esse totam quidem accusantium",
  },
];

export const tourItems = [
  {
    id: 1,
    image: tour1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    Icon: FaMap,
    location: "china",
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: "august 26th, 2020",
    title: "october 1th, 2020",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    Icon: FaMap,
    location: "indonesia",
    duration: 11,
    cost: 1400,
  },
  {
    id: 3,
    image: tour3,
    date: "september 15th, 2020",
    title: "explore hong kong",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    Icon: FaMap,
    location: "hong kong",
    duration: 8,
    cost: 5000,
  },
  {
    id: 4,
    image: tour4,
    date: "december 5th, 2019",
    title: "kenya highlights",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    Icon: FaMap,
    location: "kenya",
    duration: 20,
    cost: 3300,
  },
];
