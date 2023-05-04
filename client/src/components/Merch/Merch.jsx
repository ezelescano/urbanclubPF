import React from "react";
import style from "./Merch.module.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

const Merch = () => {
  return (
    <div className={style.containerBackground}>
      <div className={style.container}>
        <div className={style.row}>
          <div className={style.productBanner}>
            <div className={style.productStar}>
              <img
                src="https://res.cloudinary.com/dipn8zmq3/image/upload/v1683177467/UrbanClub/image_22_gqem3p.png"
                alt=""
              />
              <div className={style.productInfo}>
                <span className={style.productTitle}>
                  <b>Cuadro Decorativo Living</b>
                </span>
                <br />
                <span className={style.productSubtitle}>
                  <span className={style.productRating}>
                    <StarBorderIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </span>
                  (200+ Reviews)
                </span>
                <div className={style.productDetails}>
                  <span className={style.productDescription}>
                    <p>Medidas:60 x 100 cm </p>
                    <span className={style.productText}>
                      Fabricado sobre madera mdf maciza de 1 cm de grosor (10
                      mm) , ya listos para colgar con un sistema oculto para
                      darle mejor estética (metal)
                    </span>
                  </span>
                </div>
                <div className={style.productPrice}>
                  <span>Precio US$11.000</span>
                </div>
                <div className={style.productButtonSection}>
                  <button className={style.productButton}>Comprar ahora</button>
                  <button className={style.productButton}>
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.lowerProducts}>
          <div className={style.filterBar}>
            <div className={style.leftBarContainer}>
              <div className={style.filterContainer}>
                <div>Filtros</div>
                <ul className={style.filterList}>
                  <li>Todos</li>
                  <li>Precios Especiales</li>
                  <li>Basicos</li>
                </ul>
              </div>
              <div className={style.categoryContainer}>
                <div>Categorias</div>
                <ul className={style.categoryList}>
                  <li>Música</li>
                  <li>Arte</li>
                  <li>Baile</li>
                  <li>Especiales</li>
                  <li>Exclusivos</li>
                  <li>Para eventos</li>
                  <li>Otros</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={style.productCards}>
            <div className={style.productCard}>
              <img src="https://res.cloudinary.com/dipn8zmq3/image/upload/v1683184486/UrbanClub/products/image_48_ms40mj.png" alt="" />
              <div className={style.productInfo}>
                <span className={style.productTitle}>
                  <b>Cuadro Decorativo Living</b>
                </span>
                <div className={style.productPrice}>
                  <span>Precio US$11.000</span>
                </div>
                <div className={style.productButtonSection}>
                  <button className={style.productButton}>Comprar ahora</button>
                  <button className={style.productButton}>
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>

            <div className={style.productCard}>
              <img src="https://res.cloudinary.com/dipn8zmq3/image/upload/v1683184486/UrbanClub/products/image_48_ms40mj.png" alt="" />
              <div className={style.productInfo}>
                <span className={style.productTitle}>
                  <b>Cuadro Decorativo Living</b>
                </span>
                <div className={style.productSubtitle}>
                  <span className={style.productRating}>
                    <StarBorderIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </span>
                  (200+ Reviews)
                </div>
                <div className={style.productPrice}>
                  <span>Precio US$11.000</span>
                </div>
              </div>
            </div>
            <div className={style.productCard}>
              <img src="https://res.cloudinary.com/dipn8zmq3/image/upload/v1683184486/UrbanClub/products/image_48_ms40mj.png" alt="" />
              <div className={style.productInfo}>
                <span className={style.productTitle}>
                  <b>Figura decorativa</b>
                </span>
                <div className={style.productSubtitle}>
                  <span className={style.productRating}>
                    <StarBorderIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </span>
                  (150+ Reviews)
                </div>
                <div className={style.productPrice}>
                  <span>Precio US$7.000</span>
                </div>
              </div>
            </div>
            <div className={style.productCard}>
              <img src="https://res.cloudinary.com/dipn8zmq3/image/upload/v1683184486/UrbanClub/products/image_48_ms40mj.png" alt="" />
              <div className={style.productInfo}>
                <span className={style.productTitle}>
                  <b>Vinilo decorativo</b>
                </span>
                <div className={style.productSubtitle}>
                  <span className={style.productRating}>
                    <StarBorderIcon />
                    <StarIcon />
                    <StarIcon />
                  </span>
                  (50+ Reviews)
                </div>
                <div className={style.productPrice}>
                  <span>Precio US$3.500</span>
                </div>
              </div>
            </div>
            <div className={style.productCard}>
              <img src="https://res.cloudinary.com/dipn8zmq3/image/upload/v1683184486/UrbanClub/products/image_48_ms40mj.png" alt="" />
              <div className={style.productInfo}>
                <span className={style.productTitle}>
                  <b>Vinilo decorativo</b>
                </span>
                <div className={style.productSubtitle}>
                  <span className={style.productRating}>
                    <StarBorderIcon />
                    <StarIcon />
                    <StarIcon />
                  </span>
                  (50+ Reviews)
                </div>
                <div className={style.productPrice}>
                  <span>Precio US$3.500</span>
                </div>
              </div>
            </div>
            <div className={style.productCard}>
              <img src="https://res.cloudinary.com/dipn8zmq3/image/upload/v1683184486/UrbanClub/products/image_48_ms40mj.png" alt="" />
              <div className={style.productInfo}>
                <span className={style.productTitle}>
                  <b>Vinilo decorativo</b>
                </span>
                <div className={style.productSubtitle}>
                  <span className={style.productRating}>
                    <StarBorderIcon />
                    <StarIcon />
                    <StarIcon />
                  </span>
                  (50+ Reviews)
                </div>
                <div className={style.productPrice}>
                  <span>Precio US$3.500</span>
                </div>
              </div>
            </div>
            <div className={style.productCard}>
              <img src="https://res.cloudinary.com/dipn8zmq3/image/upload/v1683184486/UrbanClub/products/image_48_ms40mj.png" alt="" />
              <div className={style.productInfo}>
                <span className={style.productTitle}>
                  <b>Vinilo decorativo</b>
                </span>
                <div className={style.productSubtitle}>
                  <span className={style.productRating}>
                    <StarBorderIcon />
                    <StarIcon />
                    <StarIcon />
                  </span>
                  (50+ Reviews)
                </div>
                <div className={style.productPrice}>
                  <span>Precio US$3.500</span>
                </div>
              </div>
            </div>
            <div className={style.productCard}>
              <img src="https://res.cloudinary.com/dipn8zmq3/image/upload/v1683184486/UrbanClub/products/image_48_ms40mj.png" alt="" />
              <div className={style.productInfo}>
                <span className={style.productTitle}>
                  <b>Vinilo decorativo</b>
                </span>
                <div className={style.productSubtitle}>
                  <span className={style.productRating}>
                    <StarBorderIcon />
                    <StarIcon />
                    <StarIcon />
                  </span>
                  (50+ Reviews)
                </div>
                <div className={style.productPrice}>
                  <span>Precio US$3.500</span>
                </div>
              </div>
            </div>
            <div className={style.productCard}>
              <img src="https://res.cloudinary.com/dipn8zmq3/image/upload/v1683184486/UrbanClub/products/image_48_ms40mj.png" alt="" />
              <div className={style.productInfo}>
                <span className={style.productTitle}>
                  <b>Vinilo decorativo</b>
                </span>
                <div className={style.productSubtitle}>
                  <span className={style.productRating}>
                    <StarBorderIcon />
                    <StarIcon />
                    <StarIcon />
                  </span>
                  (50+ Reviews)
                </div>
                <div className={style.productPrice}>
                  <span>Precio US$3.500</span>
                </div>
              </div>
            </div>
            <div className={style.productCard}>
              <img src="https://res.cloudinary.com/dipn8zmq3/image/upload/v1683184486/UrbanClub/products/image_48_ms40mj.png" alt="" />
              <div className={style.productInfo}>
                <span className={style.productTitle}>
                  <b>Vinilo decorativo</b>
                </span>
                <div className={style.productSubtitle}>
                  <span className={style.productRating}>
                    <StarBorderIcon />
                    <StarIcon />
                    <StarIcon />
                  </span>
                  (50+ Reviews)
                </div>
                <div className={style.productPrice}>
                  <span>Precio US$3.500</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Merch;
