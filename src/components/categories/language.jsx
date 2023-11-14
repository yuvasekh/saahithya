import React, { useEffect } from "react";
import "./language.scss";
import "bootstrap/dist/css/bootstrap.min.css"

import Telugu from "../../Resources/Images/Options/telugu.jpg"
import English from "../../Resources/Images/Options/english.jpg";
// import Clips from "../../Resources/Images/Vedioclips.jpg";

import { useNavigate, useLocation } from "react-router-dom";
const imagearray = [
  { img: Telugu, imgdesc: "Telugu" },
  { img: English, imgdesc: "English" },
];

const Language = () => {
  const navigate = useNavigate();
  const test = (item) => {
    navigate("/categoryOptions", { state: { myProp: item.imgdesc } });
  };
  return (
    <>
    
      <div
        className="roman"
        
      >
        {imagearray.map((item, index) => (
          <div
            className="lan-con col-12 col-md-4  m-3"
            key={index}
            onClick={() => {
              test(item);
            }}
          >
            <img
              src={item.img}
              className="con-img-size"
              alt={`image-${index}`}
            />
            <h2
              className="language"
            >
              {item.imgdesc}
            </h2>
          </div>
        ))}
      </div>
      
    </>

  );
};

export default Language;