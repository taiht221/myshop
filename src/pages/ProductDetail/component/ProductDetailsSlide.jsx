import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import PropTypes from 'prop-types';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import useChangeTitle from 'hooks/useChangeTitle';
ProductDetailsSlide.propTypes = {
  images: PropTypes.array,
  title: PropTypes.string,
  thumbnail: PropTypes.string,
};

function ProductDetailsSlide({ img = [], title = 'CoCoShop', thumbnail }) {
  const documentTitle = useChangeTitle(title);

  return (
    <Carousel dynamicHeight={false} swipeable={true} emulateTouch infiniteLoop>
      <div>
        <img alt={title} src={img[0]?.base_url} />
        <p className="legend">{title}</p>
      </div>
      <div>
        <img alt={title} src={thumbnail} />
        <p className="legend">{title}</p>
      </div>
      <div>
        <img alt={title} src={img[1]?.base_url || img[0].base_url} />
        <p className="legend">{title}</p>
      </div>
    </Carousel>
  );
}

export default ProductDetailsSlide;
