import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [active, setActive] = useState(0);
  const handleIndexClick = (event) => {
    setActive(Number(event.target.dataset.index));
  };

  return (
    <div className="carousel">
      <img src={images[active]} alt="animal" />
      <div className="carousel-smaller">
        {images.map((photo, index) => (
          <button className="carousel-smaller-btn" key={photo}>
            <img
              src={photo}
              className={
                index === active
                  ? "carousel-smaller-btn active"
                  : "carousel-smaller-btn"
              }
              alt="animal thumbnail"
              onClick={(event) => handleIndexClick(event)}
              data-index={index}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
