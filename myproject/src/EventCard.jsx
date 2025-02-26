import React from "react";
import './EventCard.css';
import Header from "./Header";
import Footer from "./Footer";
const events = [
  { name: "Birthday Party", imgSrc: "birthday.webp", link: "birthday" },
  { name: "Marriage", imgSrc: "marriage.jpg", link: "marriage" },
  { name: "Engagement", imgSrc: "enga2.jpeg", link: "engagement" },
  { name: "House Warming", imgSrc: "housewarming.jpg", link: "housewarming" },
  { name: "Reception", imgSrc: "reception1.jpg", link: "reception" },
  { name: "Baby Shower", imgSrc: "baby1.jpg", link: "babyshower" },
  { name: "Saree Ceremony", imgSrc: "saree.png", link: "saree-ceremony" },
  { name: "Dothi Ceremony", imgSrc: "dothi.jpg", link: "dothi-ceremony" }
];

const EventCard = () => {
  return (
    <div>
      
      <Header/>
      <marquee className="marquee">Choose your delightful event and enjoy</marquee>
      <div className="containereventcard">
        {events.map((event, index) => (
          <div className="event-box" key={index}>
            <a href={event.link}>
              <img src={require(`/workspaces/mainproject/myproject/public/images/${event.imgSrc}`)} alt={event.name} />
            </a>
            <p>{event.name}</p>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default EventCard;