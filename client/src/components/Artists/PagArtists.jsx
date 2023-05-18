import React from "react";
import { useDispatch } from "react-redux";
import { pagNum } from "../../redux/artistSlice";
import styles from "../Artists/PagArtists.module.css";

const Paginado = ({ artistas, artistsPerPage }) => {
  const dispatch = useDispatch();
  const pageNumbers = [];

  //Math.ceil(250/10) = 25pag
  for (let i = 1; i <= Math.ceil(artistas / artistsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.navFlexer}>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <button
              className={styles.number}
              key={number}
              type="button"
              onClick={() => dispatch(pagNum(number))}
            >
              {number}
            </button>
          ))}
      </div>
    </nav>
  );
};

export default Paginado;
