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
    }, 500);
  };

  const previous = () => {
    selectNewImage(selectedIndex, images, false);
  };

  const next = () => {
    selectNewImage(selectedIndex, images);
  };

  return (
    <>
      <div className="carousel-container" style={{ position: "relative" }}>
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.289)",
            width: "90%",
            height: "80%",
            alignItems: "center",
            textAlign: "center",
            paddingTop:"20%",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h1
            style={{ fontSize: "4rem", color: "#fff", marginBottom: "0.5rem" }}
          >
            Urban Club!
          </h1>
          <h2 style={{ fontSize: "1.5rem", color: "#fff" }}>
            La página de los artistas de todo el mundo, ahora en el tuyo!
          </h2>
        </div>
        <img
          className={`${Style["carousel-img"]} ${loaded ? Style.loaded_ : ""}`}
          src={selectedImage}
          alt="banda"
          style={{ objectFit: "cover" }}
          onLoad={() => setLoaded(true)}
        />
        <div
          className={Style.ButtonContainer}
          style={{ position: "absolute", left: 0, right: 0, zIndex: 1 }}
        >
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
        </div>
      </div>
    </>
  );
}
