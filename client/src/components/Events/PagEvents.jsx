import React from "react";
import { useDispatch } from "react-redux";
import { pagNum } from "../../redux/eventSlice";
import styles from "../Events/PagEvents.module.css";

const Paginado = ({ events, eventsPerPage }) => {
  const dispatch = useDispatch();
  const pageNumbers = [];

  
  for (let i = 1; i <= Math.ceil(events / eventsPerPage); i++) {
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
