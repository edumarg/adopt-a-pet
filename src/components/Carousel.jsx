import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [active, setActive] = useState(0);
  const handleIndexClick = (event) => {
    setActive(+event.target.dataset.index);
  };

  console.log(images);
  return (
    <div className="carousel">
      <img src={images[active]} alt="animal" />
      <div className="carousel-smaller">
        {images.map((photo, index) => (
          // eslint-disable-next-line
          <img
            key={photo}
            src={photo}
            className={index === active ? "active" : ""}
            alt="animal thumbnail"
            onClick={(event) => handleIndexClick(event)}
            data-index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
