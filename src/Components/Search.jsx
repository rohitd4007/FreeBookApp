import "./Search.css";
import searchicon from "../icons/Search.svg";

const Book = (props) => {
  return (
    <div className="search-container">
      {/* <img className="serach-icon" src={searchicon} alt=""></img> */}
      <input className="search" type="search" placeholder="Search"></input>
    </div>
  );
};

export default Book;
