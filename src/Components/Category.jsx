import React, { useState } from "react";
import pattern from "../icons/Pattern.svg";
import fiction from "../icons/Fiction.svg";
import politics from "../icons/Politics.svg";
import next from "../icons/Next.svg";
import philosophy from "../icons/Philosophy.svg";
import drama from "../icons/Drama.svg";
import historyGenre from "../icons/History.svg";
import humour from "../icons/Humour.svg";
import adventure from "../icons/Adventure.svg";
import "./Category.css";

const Category = (props) => {
  const sentToBook = (params) => {
    //console.log(params);
    window.location.href = `book/${params}`;
  };

  return (
    <div className="container">
      <div className="pattern-container">
        <img className="pattern" src={pattern} alt="pp" />
      </div>
      <div className="title-container">
        <h2 className="title">Guttenberg Project</h2>
        <p className="desc">
          A social cataloging website that allows you to freely serach its
          database of books, annotate, and review
        </p>
      </div>
      <div className="genre">
        <div className="categories-container">
          <div
            className="genre-card"
            onClick={() => {
              sentToBook("fiction");
            }}
          >
            <div className="left">
              <img src={fiction} alt="pp" />
              FICTION
            </div>
            <img src={next} alt="pp" />
          </div>
          <div
            className="genre-card"
            onClick={() => {
              sentToBook("philosophy");
            }}
          >
            <div className="left">
              <img src={philosophy} alt="pp" />
              DRAMA
            </div>
            <img src={next} alt="pp" />
          </div>
          <div
            className="genre-card"
            onClick={() => {
              sentToBook("drama");
            }}
          >
            <div className="left">
              <img src={drama} alt="pp" />
              PHILOSOPY
            </div>
            <img src={next} alt="pp" />
          </div>
          <div
            className="genre-card"
            onClick={() => {
              sentToBook("historyGenre");
            }}
          >
            <div className="left">
              <img src={historyGenre} alt="pp" />
              HISTORY
            </div>
            <img src={next} alt="pp" />
          </div>
          <div
            className="genre-card"
            onClick={() => {
              sentToBook("humour");
            }}
          >
            <div className="left">
              <img src={humour} alt="pp" />
              HUMOUR
            </div>
            <img src={next} alt="pp" />
          </div>
          <div
            className="genre-card"
            onClick={() => {
              sentToBook("adventure");
            }}
          >
            <div className="left">
              <img src={adventure} alt="pp" />
              ADVENTURE
            </div>
            <img src={next} alt="pp" />
          </div>
          <div
            className="genre-card"
            onClick={() => {
              sentToBook("politics");
            }}
          >
            <div className="left">
              <img src={politics} alt="pp" />
              POLITICS
            </div>
            <img src={next} alt="pp" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
