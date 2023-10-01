import React, { useState } from "react";

const catImg = require("../images/cat.jpeg");
const oipImg = require("../images/OIP.jpeg");
const dogImg = require("../images/dog.jpeg");
const red_roseImg = require("../images/red_rose.jpeg");
const sunFlowerImg = require("../images/sunflower.jpeg");
// console.log(catImg);

const Carousel = () => {
  const images = [catImg, oipImg, dogImg, red_roseImg, sunFlowerImg];
  const [state, setState] = useState(0);

  function getPrevImg() {
    if (state > 0) setState(state - 1);
    else setState(0);
  }
  function getNextImg() {
    if (state < images.length - 1) setState(state + 1);
    else setState(images.length - 1);
  }
  return (
    <div id="main">
      <div id="btnPrev" onClick={getPrevImg}>
        Previous
      </div>
      <div id="slideWindow">
        <img
          id="image"
          src={images[state]}
          alt="img1"
          style={{ width: 500, height: 500 }}
        />
      </div>
      <div id="btnNext" onClick={getNextImg}>
        Next
      </div>
    </div>
  );
};
export default Carousel;
