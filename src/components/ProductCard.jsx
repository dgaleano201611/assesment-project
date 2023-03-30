import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/ProductCard.css";

const ProductCardPrueba = ({ product }) => {
  const [timer, setTimer] = useState(
    parseInt(Math.floor(Math.random() * 149) + 1)
  );
  const [timerExpired, setTimerExpired] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    if (timer === 0) {
      setTimerExpired(true);
    }
  }, [timer]);

  const handleClick = (e) => {
    if (timerExpired) {
      e.preventDefault();
    }
  };
  return (
    <main>
      <section className="main-container">
        <p className="main-container__title">{product.title}</p>
        <figure classNAme="figure-container">
          <img
            className="figure-container__image"
            src={product.image}
            alt="ima"
          />
        </figure>
        <article className="product-info">
          <p className="product-info__timer">
            {timer >= 0 ? `${timer} seconds` : "Time Out :("}
          </p>
          <Link to={`/product/${product.id}`}>
            <button
              className="CreateTodoButton"
              onClick={(e) => handleClick(e)}
            >
              Go to detail
            </button>
          </Link>
        </article>
      </section>
    </main>
  );
};
export default ProductCardPrueba;
