import React from 'react'

import Carousel from '../Carousel/Carousel.jsx';
import style from '../HomePage/Home.module.css';

const HomePage = () => {
  const images = ["https://res.cloudinary.com/dinvg1hz6/image/upload/v1682605223/Proyecto_nuevo_2_amp37d.jpg", "https://res.cloudinary.com/dinvg1hz6/image/upload/v1682604885/Proyecto_nuevo_rxedju.jpg", "https://res.cloudinary.com/dinvg1hz6/image/upload/v1682605224/Proyecto_nuevo_1_psedq6.jpg"];

  return (
    <div className={style.main}>
      <div>
      <Carousel images={images} autoPlay={false}  showButtons={false}/>
      </div>

      <h1>Está es la HomePage</h1>
     
      
      </div>
  )
}

export default HomePage