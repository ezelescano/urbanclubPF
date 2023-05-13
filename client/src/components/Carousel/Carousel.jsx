import { useEffect, useState } from "react";
import Style from "../Carousel/Carousel.module.css";

export default function Carousel(props) {
  const { images, autoPlay, showButtons } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (autoPlay || !showButtons) {
      const interval = setInterval(() => {
        selectNewImage(selectedIndex, images);
      }, 8000);
      return () => clearInterval(interval);
    }
  });

  const selectNewImage = (index, images, next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next
        ? selectedIndex < images.length - 1
        : selectedIndex > 0;
      const nextIndex = next
        ? condition
          ? selectedIndex + 1
          : 0
        : condition
        ? selectedIndex - 1
        : images.length - 1;
      setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 10);
  };

  const previous = () => {
    selectNewImage(selectedIndex, images, false);
  };

  const next = () => {
    selectNewImage(selectedIndex, images);
  };

  return (
    <>
      <div className={Style.carouselContainer}>
        <img
          className={`${Style["carousel-img"]} ${loaded ? Style.loaded_ : ""}`}
          src={selectedImage}
          alt="banda"
          onLoad={() => setLoaded(true)}
        />
        <div className={Style.ButtonContainer}>
          {showButtons ? (
            <>
              <button className={Style.button} onClick={previous}>
                {"<"}
              </button>
              <button className={Style.button} onClick={next}>
                {">"}
              </button>
            </>
          ) : (
            <></>
          )}
          <div className={Style.subtitle}>
            <h1 className={Style.urbanClub}>
              <span className={Style.bigText}>Urban</span>
              <br />
              <span className={Style.bigText}>Club!</span>
            </h1>
            <h2>
              La página de los artistas de todo el mundo, ahora en el tuyo!
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
