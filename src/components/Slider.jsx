import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "./Slider.css"
import titleCase from '../Functions/titleCase'
import imagesPath from '../Functions/imagesPath'
import fetchFunction from '../Functions/fetchFunction'
const { v4: uuidv4 } = require('uuid')


function Slider({ sliderData, isLargeScreen }) {
  const [imageDataList, setImageDataList] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imageUrls = imagesPath(sliderData, "sliderimages")
        const fetchDataPromises = imageUrls.map(async (imageUrl) => {
          const response = await fetchFunction(`/images/${imageUrl}`);
          const data = await response.blob();
          return URL.createObjectURL(data);
        });

        const imageData = await Promise.all(fetchDataPromises)
        setImageDataList(imageData);

        return URL.revokeObjectURL(imageDataList)
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);


  return (
    <div className='slider-container'>
      <Carousel showThumbs={false} showArrows={isLargeScreen} autoPlay={true} interval={5000} infiniteLoop={true} transitionTime={200} preventMovementUntilSwipeScrollTolerance swipeScrollTolerance={50}>
        {sliderData.map((elem, i) => (
          <div className='slider-element' key={uuidv4()}>
            {(elem.image_src != undefined) && <img src={imageDataList[i]} />}
            <div className='slider-text-container'>
              <h5 className='type'>{titleCase(elem.type)}</h5>
              <h2 className='title'>
                {titleCase(elem.title)}
              </h2>
            </div>
          </div>
        )
        )}
      </Carousel>
    </div>
  )
}

export default Slider