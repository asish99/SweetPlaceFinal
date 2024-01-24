import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Peda from './images/Peda.jpg';
import Image2 from './images/Image2.jpg';
import Image from './images/Image.jpg';
// import Card from 'react-bootstrap/Card';
import Ourstoredata from './OurstoreData';
import "./style.css";
import { useState } from 'react';
import CardComponent from './CardComponent';



export default function Ourstore() {
  // Beginning
  const [data,setData] = useState(Ourstoredata);
  
  return (
    <div>
    <br/>
    <Carousel data-bs-theme="light">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Peda}
          alt="First slide"
          width="600"
          height="430"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image2}
          alt="Second slide"
          width="600"
          height="430"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image}
          alt="Third slide"
          width="600"
          height="430"
        />
      </Carousel.Item>
    </Carousel>
    <h2 className='text-center pt-5 text-danger'>OUR STORES</h2>

      <div className='row d-flex justify-content-center align-items-center'>
        {
          <CardComponent arraydata={Ourstoredata} isForm="ourstore"/>
        }
      
      </div>
    </div>
    
  )
}