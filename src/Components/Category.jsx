import React, { useState } from "react";
import pattern from "../icons/Pattern.svg";
import "./Category.css";

const Category = (props) => {
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
      <div className="categories-container">
        <div className="genre-card">FICTION</div>
        <div className="genre-card">DRAMA</div>
        <div className="genre-card">PHILOSOPY</div>
        <div className="genre-card">HISTORY</div>
        <div className="genre-card">HUMOUR</div>
        <div className="genre-card">ADVENTURE</div>
        <div className="genre-card">POLITICS</div>
      </div>
    </div>
  );
};

export default Category;
