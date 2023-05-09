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
                  <span>Precio US$11.00</span>
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
                <h3>Filtros</h3>
                <ul className={style.filterList}>
                  <li>Todos</li>
                  <li>Precios Especiales</li>
                  <li>Basicos</li>
                </ul>
              </div>
              <div className={style.categoryContainer}>
                <h3>Categorias</h3>
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
              <img
                src="https://res.cloudinary.com/dipn8zmq3/image/upload/v1683184486/UrbanClub/products/image_48_ms40mj.png"
                alt=""
              />
              <div className={style.productInfo}>
                <span className={style.productTitle}>
                  <b>Pua de Greg Gonzalez {"(No Solista)"}</b>
                </span>
                <div className={style.productPrice}>
                  <span>Precio US$199.99</span>
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
              <img
                src="https://m.media-amazon.com/images/I/61uXug-9AQL._AC_SX569_.jpg"
                alt=""
              />
              <div className={style.productInfo}>
                <span className={style.productTitle}>
                  <b>Taza de Banda local "The Not Strokes"</b>
                </span>
                <div className={style.productPrice}>
                  <span>Precio US$10.00</span>
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
              <img
                src="https://www.gonzalezvientos.com.ar/gvstore/wp-content/uploads/2016/08/1-1.jpg"
                alt=""
              />
              <div className={style.productInfo}>
                <span className={style.productTitle}>
                  <b>Pua de Axel Rose</b>
                </span>
                <div className={style.productPrice}>
                  <span>Precio US$80.00</span>
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
              <img
                src="https://storage.googleapis.com/tecnowestune/2021/11/1d029028-198-0351-303-01bis.jpg"
                alt=""
              />
              <div className={style.productInfo}>
                <span className={style.productTitle}>
                  <b>Pua de Rihanna {"(Solista)"}</b>
                </span>
                <div className={style.productPrice}>
                  <span>Precio US$11.00</span>
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
              <img
                src="https://m.media-amazon.com/images/I/41Bh6T-vJXL.jpg"
                alt=""
              />
              <div className={style.productInfo}>
                <span className={style.productTitle}>
                  <b>Guitarra + Funda {"(Proyect X) "}</b>
                </span>
                <div className={style.productPrice}>
                  <span>Precio US$65.50</span>
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
              <img
                src="https://ae01.alicdn.com/kf/Hb6264ec37d4246d9a7239d033a375191E/Varitas-m-gicas-de-Harry-Potter-para-Cosplay-varita-de-Dumbledore-joven-juguetes-de-rendimiento-para.jpg_640x640.jpg"
                alt=""
              />
              <div className={style.productInfo}>
                <span className={style.productTitle}>
                  <b>Vara Original Harry Potter</b>
                </span>
                <div className={style.productPrice}>
                  <span>Precio US$2501.00</span>
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
              <img
                src="https://cdn.shopify.com/s/files/1/0258/6276/6677/products/Ciudad-futuristica-Poster_800x.jpg?v=1614736767"
                alt=""
              />
              <div className={style.productInfo}>
                <span className={style.productTitle}>
                  <b>Cuadro Decorativo 3D</b>
                </span>
                <div className={style.productPrice}>
                  <span>Precio US$56.50</span>
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
              <img
                src="https://http2.mlstatic.com/D_NQ_NP_663124-MLA53708833807_022023-W.jpg"
                alt=""
              />
              <div className={style.productInfo}>
                <span className={style.productTitle}>
                  <b>
                    Camiseta de <br></br>
                    {"(Los No Redondos)"}
                  </b>
                </span>
                <div className={style.productPrice}>
                  <span>Precio US$20.00</span>
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
              <img
                src="https://img.freepik.com/fotos-premium/bateria-profesional-rock-black-sobre-fondo-blanco-representacion-3d_476612-9889.jpg?w=2000"
                alt=""
              />
              <div className={style.productInfo}>
                <span className={style.productTitle}>
                  <b>
                    Bateria Usada de <br></br>
                    {"(Los No Redondos)"}
                  </b>
                </span>
                <div className={style.productPrice}>
                  <span>Precio US$605.00</span>
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
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKDzGWSSsKGvyPrbu_ROdOlTDEoCvoYGZYmOY_gKyP-N7970F0bkyJEdUkcebad5AFEA0&usqp=CAU"
                alt=""
              />
              <div className={style.productInfo}>
                <span className={style.productTitle}>
                  <b>
                    Monociclo épico <br />
                    {"(Shampoo anticaidas incluido)"}
                  </b>
                </span>
                <div className={style.productPrice}>
                  <span>Precio US$89.90</span>
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
      </div>
    </div>
  );
};

export default Merch;
