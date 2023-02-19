import React from "react";
import { Image } from "../../../common";
import { BASE_URL } from "../../../../constants";
import "./offers.scss"

const Offer = ({ offer }) => {
  return (
    <div className="offers">
        <Image
          className="offers-img"
          src={`${BASE_URL}${offer.bannerImageUrl}`}
          alt={offer.bannerImageAlt}
        />
        <h4>{offer.bannerImageAlt}</h4>
    </div>
  );
};

export default Offer;
