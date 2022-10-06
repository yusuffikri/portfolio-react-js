import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";

//jangan gunakan gambar pada product

const data = [
  {
    id: 1,
    image: IMG1,
    tittle: "Personal Portfolio Vol.1",
    link: "https://github.com/yusuffikri/portfolio-boostrap5",
    isi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    image: IMG2,
    tittle: "Ping Pong Games",
    link: "https://github.com/yusuffikri/pong-games",
    isi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    image: IMG3,
    tittle: "Calculator Apps",
    link: "https://github.com/yusuffikri/calculator",
    isi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 4,
    image: IMG4,
    tittle: "Tic Tac Toe Games",
    link: "https://github.com/yusuffikri/tictactoe-js",
    isi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 5,
    image: IMG5,
    tittle: "Personal Portfolio Vol.1",
    link: "https://github.com/yusuffikri/portfolio-boostrap5",
    isi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 6,
    image: IMG6,
    tittle: "Personal Portfolio Vol.2",
    link: "https://github.com/yusuffikri/yusuffikri.github.io",
    isi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, tittle, link, isi }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={tittle} />
              </div>
              <h3>{tittle}</h3>
              <p>{isi}</p>
              <div className="portfolio__item-cta">
                <a href={link} className="btn btn-primary" target="_blank">
                  Link to Github
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
