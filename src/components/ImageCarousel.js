import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

var React = require('react')

// Source: https://github.com/leandrowd/react-responsive-carousel/blob/master/src/components/Carousel.tsx
function createPictures(props) {
  return props.map((item, i) => (
    <div key={i}>
      <img src={item} alt='' />
    </div>
  ))
}
function ImageCarousel(props) {
  return (
    <Carousel
      showArrows={true}
      autoPlay={true}
      showThumbs={false}
      infiniteLoop={true}
      showStatus={false}
      interval={4000}
    >
      {createPictures(props.images)}
    </Carousel>
  )
}

export default ImageCarousel
