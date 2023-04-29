import React from "react";
import Carousel from "../Carousel/Carousel.jsx";
import style from "../HomePage/HomePage.module.css";
import HomeArt from "../HomePage/HomeArt.jsx";

const HomePage = () => {
  const images = [
    "https://res.cloudinary.com/dinvg1hz6/image/upload/v1682605223/Proyecto_nuevo_2_amp37d.jpg",
    "https://res.cloudinary.com/dinvg1hz6/image/upload/v1682604885/Proyecto_nuevo_rxedju.jpg",
    "https://res.cloudinary.com/dinvg1hz6/image/upload/v1682605224/Proyecto_nuevo_1_psedq6.jpg",
  ];
  return (
    <div className={style.main}>
      <div className={`${style.ConteinerArt} ${style.CarouselContainer}`}>
        <Carousel images={images} autoPlay={true} showButtons={true} />
      </div>
      <br></br>
      <h1 className={style.title}>Artistas más populares</h1>
      <div>
        <HomeArt />
      </div>
      <h1 className={style.title}>Eventos más populares</h1>
      <div>
        Aca va eventos
      </div>
    </div>
  );
};

export default HomePage;
