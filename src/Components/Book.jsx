import backIcon from "../icons/Back.svg";
import "./Book.css";
import Cards from "./Cards";
import Search from "./Search";

const Book = (props) => {
  return (
    <div className="book-container">
      <div className="back-icon-container">
        <img className="back-icon" src={backIcon} alt="back" />
        <span className="genre-title">{props.genre}</span>
      </div>
      <div className="serach-bar">
        <Search></Search>
      </div>
      <div className="book-details">
        <Cards></Cards>
      </div>
    </div>
  );
};

export default Book;
