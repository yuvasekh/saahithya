import React, { useEffect } from "react";
import "./CategoryOptions.scss";

import Audio from "../../Resources/Images/Audio.jpg";
import Books from "../../Resources/Images/Books.jpg";
import Clips from "../../Resources/Images/Vedioclips.jpg";

import { useNavigate, useLocation } from "react-router-dom";
const imagearray = [
  { img: Audio, imgdesc: "Telugu" },
  { img: Books, imgdesc: "English" },
];

const Language = () => {
  const navigate = useNavigate();
  const test = (item) => {
    navigate("/categoryOptions", { state: { myProp: item.imgdesc } });
  };
  return (
    <div
      className="category-container"
      style={{ position: "relative", margin: "35px" }}
    >
      {imagearray.map((item, index) => (
        <div
          className="container-img"
          key={index}
          onClick={() => {
            test(item);
          }}
        >
          <img
            src={item.img}
            className="container-img-size"
            alt={`image-${index}`}
          />
          <h2
            style={{ color: "white", marginTop: "-42px", marginLeft: "30px" }}
          >
            {item.imgdesc}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Language;
