import React from "react";
import { Button, Image } from "../../../common";
import { BASE_URL } from "../../../../constants";
import "./category.scss"

const Category = ({ cat }) => {
  return (
    <div className="category">
      <div>
        <h3>{cat.name}</h3>
        <p>{cat.description}</p>
        <Button>Explore {cat.key}</Button>
      </div>
      <div>
        <Image
          className="category-img"
          src={`${BASE_URL}${cat.imageUrl}`}
          alt={cat.name}
        />
      </div>
    </div>
  );
};

export default Category;
