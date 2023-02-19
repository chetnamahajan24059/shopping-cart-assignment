import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Category, Offer } from "./components";
import useCategory from "./hooks/useCategory";
import useOffers from "./hooks/useOffers";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./home.scss";

const Home = () => {
  const { category } = useCategory();
  const { offers } = useOffers();

  return (
    <div className="home">
      <Carousel ariaLabel="Trending offers carousel" interval={5000}infiniteLoop showArrows autoPlay swipeable emulateTouch>
        {offers.map((offer) => {
          return <Offer key={offer.id} offer={offer} />;
        })}
      </Carousel>

      {category.map((cat) => {
        if (cat.enabled) {
          return <Category cat={cat} key={cat.id} />;
        }
        return null;
      })}
    </div>
  );
};

export default Home;
