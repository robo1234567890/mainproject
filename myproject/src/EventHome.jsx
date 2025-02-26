import React from 'react';
import { Link } from 'react-router-dom';
import './EventHome.css';
import Header from '/workspaces/mainproject/myproject/src/Header.jsx';
import Footer from './Footer';

const EventHome = () => {
  return (
    <div className="containerHome">
      <Header />
      <img
        src="https://static.wixstatic.com/media/90a441_eccfceea28d6446b90cdf16823900c7a~mv2.jpg/v1/fill/w_1000,h_463,al_c,q_85,enc_auto/90a441_eccfceea28d6446b90cdf16823900c7a~mv2.jpg"
        width="100%"
        height="450px"
        alt="Event Banner"
      />

      <div className="headerHome">
        <i>Your trusted event planners for</i>
      </div>

      <div className="cardContainerHome">
        <Link to="/weddings" className="cardHome">
          <div className="circleHome">
            <img
              src="https://www.admin.booktheparty.in/assets/images/category_icons/marraige.png"
              alt="Weddings"
            />
          </div>
          <h2>Weddings</h2>
          <p>
            Wedding celebration is now easy. We are providing all services regarding weddings in which you can contact vendors easily with one click.
          </p>
        </Link>

        <Link to="/birthdays" className="cardHome">
          <div className="circleHome">
            <img
              src="https://www.admin.booktheparty.in/assets/images/category_icons/birthdays.png"
              alt="Birthdays"
            />
          </div>
          <h2>Birthdays</h2>
          <p>
            Birthday celebration is now easy. We are providing all services regarding birthdays in which you can contact vendors easily with one click.
          </p>
        </Link>

        <Link to="/events" className="cardHome">
          <div className="circleHome">
            <img
              src="https://www.admin.booktheparty.in/assets/images/category_icons/surprise_party.png"
              alt="Other"
            />
          </div>
          <h2>Other</h2>
          <p>
            Other celebrations are now easy. We are providing all services regarding your celebrations in which you can contact vendors easily with one click.
          </p>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default EventHome;
