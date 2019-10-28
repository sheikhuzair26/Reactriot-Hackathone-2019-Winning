import React from "react";
import "./select-player.css";
import damiImg from "../images/mark.png";
import paul from "../images/paul.png";
import eddy from "../images/eddy.jpg";
import jin from "../images/jin.png";
import kaju from "../images/kaju.png";
import sound from "./../sounds/click.mp3";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

const PlayerSelection = () => {
  const [dynamicImage, changeImage] = React.useState(damiImg);

  const audio = new Audio(sound);

  return (
    <div>
      <main className="main">
        <div className="container-players">
          <img className="userContent" src={dynamicImage} alt="Unknown" />
        </div>

        <div className="ChoicePlayer">
          <div></div>
          <Link to="/topic-selection">

          <img
                   
            className="paulImg"
            id="selectionImg"
            src={paul}
            alt="Paul"
            onMouseOver={() => {
              changeImage(paul);

              audio.play();
            }}
            onMouseOut={() => changeImage(damiImg)}
           
          />
          </Link>
          <Link to="/topic-selection">

          <img
            className="kazuyaImg"
            id="selectionImg"
            src={kaju}
            alt="Kazuya"
            onMouseOver={() => {
              changeImage(kaju);
              audio.play();
            }}
            onMouseOut={() => changeImage(damiImg)}
          />
          </Link>
          <Link to="/topic-selection">

          <img
            className="eddyImg"
            id="selectionImg"
            src={eddy}
            alt="eddy"
            onMouseOver={() => {
              changeImage(eddy);
              audio.play();
            }}
            onMouseOut={() => changeImage(damiImg)}
          />
          </Link>
          <Link to="/topic-selection">

          <img
            className="jinImg"
            id="selectionImg"
            src={jin}
            alt="Jin"
            onMouseOver={() => {
              changeImage(jin);
              audio.play();
            }}
            onMouseOut={() => changeImage(damiImg)}
          />
          </Link>
        </div>
      </main>
    </div>
  );
};
export default PlayerSelection;
