import React, { Component } from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';

class CaruselExample extends Component {
  render() {
    return (
      <Carousel>
      <Carousel.Item>
        <img width={1500} height={200} alt="900x500" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoRMLkaBcPeSHUW7ctbUJPI_VnqpkGdSCM8yA3SllG_ZgsnxWc" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={1500} height={40} alt="900x500" src="http://www.samoaobserver.ws/images/cache/600x400/crop/images%7Ccms-image-000009332.jpg" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={1500} height={40} alt="900x500" src="https://i.ytimg.com/vi/0AxXdE0dqx0/maxresdefault.jpg" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
  }
}

export default CaruselExample;