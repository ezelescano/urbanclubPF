import React from 'react'
import Carousel from '../Carousel/Carousel.jsx';
import style from '../HomePage/Home.module.css';
import img_banner1 from "../../imagenes/mago3.jpg";
import img_banner2 from "../../imagenes/musico1.jpg";
import img_banner3 from "../../imagenes/musico2.jpg";

const HomePage = () => {
  const images = [img_banner1, img_banner2, img_banner3];

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