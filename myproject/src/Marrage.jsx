import React from "react";
import "./Marrage.css";
import Footer from "./Footer";
import Header from "./Header";
const events = [
  { name: "Decoration",  img: "https://image.wedmegood.com/resized/450X/uploads/project/82707/1585566648_Siri_GM_33.jpg" },
  { name: "Band",  img: "https://images.picxy.com/cache/2019/1/30/68d5a605ce162435c93ec4572399a476.jpg" },
  { name: "Music",  img: "https://t4.ftcdn.net/jpg/02/45/12/77/360_F_245127730_9pslBprPicrMYkSpLzvcwXTpjK7pQ5cP.jpg" },
  { name: "Photographer",  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsX4ecxkMJjlg9UigooeHLCDrM5cSGa0bUYQ&s" },
  { name: "Banquet Hall", img: "https://i.pinimg.com/originals/02/1a/ba/021aba67017624fb7faec05d2365fbcd.jpg" },
  
  { name: "Rented Cars", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJm37kyDvQgqyzobOkDjxvcfHB1LYJ70nsbA&s" },
  { name: "Lighting",  img: "https://i.pinimg.com/originals/67/10/a0/6710a0fe67e7918803cdf657081b6eef.jpg" },
  { name: "Make Up", img: "https://cdn0.weddingwire.in/vendor/8107/3_2/960/jpg/makeupartist-makeup-by-nivedita-bridalmakeup-6_15_408107-165963495245857.jpeg" },
];

const Marrage = () => {
  return (
    <div >
      <Header/>
      <div className="wholebody">
      <div className="containereventcard ">
        {events.map((event, index) => (
          <div className="event-box" key={index}>
            
              <img src={event.img} alt={event.name} />
           
            <p>{event.name}</p>
          </div>
        ))}
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Marrage;