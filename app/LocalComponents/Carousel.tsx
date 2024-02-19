import React, { useState } from "react";

const Carousel = () => {

    const [imagePosition, setImagePosition] = useState(1);

    const [activeImage, setActiveImage] = useState(
      `image-product-${imagePosition}`
    );
  
    const [quantity, setQuantity] = useState(1);
  return (
    <div className="md:w-[50%]  flex flex-col justify-center items-center">
    
      <div className="md:w-3/4 rounded-3xl relative">
        {imagePosition !== 1 && (
          <img
            onClick={() => {
              if (imagePosition >= 1) {
                setImagePosition((prevPosition) => prevPosition - 1);
                setActiveImage(`image-product-${imagePosition - 1}`);
              }
            }}
            className="absolute left-6 bg-white px-4 py-3 rounded-full top-48 cursor-pointer md:invisible visible"
            src="/icon-previous.svg"
            alt=""
          />
        )}
        
          <img className=" md:rounded-3xl" src={`/${activeImage}.jpg`} alt="" />


        {imagePosition !== 4 && (
          <img
            onClick={() => {
              if (imagePosition <= 3) {
                setImagePosition((prevPosition) => prevPosition + 1);
                setActiveImage(`image-product-${imagePosition + 1}`);
              }
            }}
            className="absolute right-6 top-48 bg-white px-4 py-3 rounded-full cursor-pointer md:invisible visible"
            src="/icon-next.svg"
            alt=""
          />
        )}
      </div>
    </div>
  );
};

export default Carousel;
