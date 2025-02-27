import React from "react";
import './EventCard.css';
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
const events = [
  { name: "Birthday Party", imgSrc: "birthday.webp", link: "birthday" ,url:'/birthday'},
  { name: "Marriage", imgSrc: "marriage.jpg", link: "marriage" ,url:'/marrage'},
  { name: "Engagement", imgSrc: "enga2.jpeg", link: "engagement" ,url:'/birthday'},
  { name: "House Warming", imgSrc: "housewarming.jpg", link: "housewarming" ,url:'/birthday'},
  { name: "Reception", imgSrc: "reception1.jpg", link: "reception" ,url:'/birthday'},
  { name: "Baby Shower", imgSrc: "baby1.jpg", link: "babyshower" ,url:'/birthday'},
  { name: "Saree Ceremony", imgSrc: "saree.png", link: "saree-ceremony" ,url:'/birthday'},
  { name: "Dothi Ceremony", imgSrc: "dothi.jpg", link: "dothi-ceremony" ,url:'/birthday'}
];

const EventCard = () => {
  return (
    <div>
      
      <Header/>

      <marquee className="marquee">Choose your delightful event and enjoy</marquee>
      <div className="wholebody">
      <div className="containereventcard">
        {events.map((event, index) => (
          <Link to={event.url}>
          <div className="event-box" key={index}>
            
            <a href={event.link}>
              <img src={require(`/workspaces/mainproject/myproject/public/images/${event.imgSrc}`)} alt={event.name} />
            </a>
            <p>{event.name}</p>
            
          </div>
          </Link>
        ))}
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default EventCard;