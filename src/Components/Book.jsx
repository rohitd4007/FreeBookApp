import backIcon from "../icons/Back.svg";
import "./Book.css";
import Cards from "./Cards";
import Search from "./Search";
import { SearchContext } from "../Helper/Context";
import { useState } from "react";

const Book = (props) => {
  const [serachstate, setSearchstate] = useState();
  return (
    <div className="book-container">
      <div className="back-icon-container">
        <img
          onClick={() => {
            window.location.href = "/category";
          }}
          className="back-icon"
          src={backIcon}
          alt="back"
        />

        <span className="genre-title">{props.genre}</span>
      </div>
      <SearchContext.Provider value={(serachstate, setSearchstate)}>
        <div className="serach-bar">
          <Search />
        </div>
        <div className="book-details">
          <Cards topic={props.genre} />
        </div>
      </SearchContext.Provider>
    </div>
  );
};

export default Book;
