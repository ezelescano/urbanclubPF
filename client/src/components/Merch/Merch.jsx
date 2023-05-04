import React from "react";
import style from "./Merch.module.css";

const Merch = () => {
  return (
    <div className={style.containerBackground}>
      <div className={style.container}>
        <div className={style.row}>
          <div className={style.boxNone}></div>
          <div className={style.productBanner}>
            <div className={style.productStar}>
              <img
                src="https://res.cloudinary.com/dipn8zmq3/image/upload/v1683177467/UrbanClub/image_22_gqem3p.png"
                alt=""
              />
              <div className={style.productInfo}>
                <span>Cuadro Decorativo Living</span>
              </div>
            </div>
          </div>
        </div>
        <div className={style.row}>
          <div className={style.box2}></div>
          <div className={style.box3}></div>
        </div>
      </div>
    </div>
  );
};

export default Merch;
