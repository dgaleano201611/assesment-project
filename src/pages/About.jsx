import React from "react";
import imafooter from "../assets/footer.jpg";
import perfil from "../assets/perfil.jpg";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import "../css/About.css";

const About = () => {
  return (
    <section className="main-container-about">
      <img src={perfil} alt="perfil" className="main-container-about__photo" />
      <p className="main-container-about__name">
        I'm <strong>Diego Galeano</strong>
      </p>
      <p className="main-container-about__description">
        Soy Físico apasionado por la programación y el desarrollo web, estoy
        interesado en aprender cada día nuevas tecnologías para crecer en este
        nuevo y hermoso mundo.
      </p>
      <h1>¡Hé aprendido en este programa!</h1>
      <ol className="content-list">
        <li>
          El frontend ha sido algo nuevo para mí, y mi reto es manejarlo a la
          perfección.
        </li>
        <li>Manejo de consumo de una api</li>
        <li>Enrutamiento y el manejo del estado por medio de hooks</li>
      </ol>

      <section className="pages-links">
        <span className="pages-links__gmail">
          <a href="diegodag.24@gmail.com">
            <SiGmail size={30} />
          </a>
        </span>
        <span className="pages-links__github">
          <a href="https://github.com/dgaleano201611">
            <FaGithubSquare size={30} />
          </a>
        </span>
      </section>
      <footer className="image-footer">
        <img
          src={imafooter}
          alt="imagen footer"
          className="image-footer__picture"
        />
      </footer>
    </section>
  );
};

export { About };
